import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { useClient } from '@/context/auth-context';

const CustomTextField = styled(TextField)(() => ({
  width: '100%',
  marginTop: '10px',
  '& .MuiFormHelperText-root': {
    color: 'red',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: '2px solid rgb(6 126 122)',
  },
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid rgb(6 126 122)',
  },
}));
export default function MultiSelect({
  title,
  name,
  width,
  optionUrl,
  control,
  optionLable,
  errors,
  multiple = false,
  handleChange,
}: any) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const client = useClient();

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    (async () => {
      const response = await client(optionUrl);
      const countries = response.data;
      if (active) {
        setOptions(countries);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          multiple={multiple}
          sx={{ flexBasis: width || '100%' }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          loading={loading}
          options={options}
          isOptionEqualToValue={(option, val) => option[optionLable] === val[optionLable]}
          getOptionLabel={(option) => option[optionLable]}
          renderInput={(params) => {
            return (
              <CustomTextField
                {...params}
                label={<FormattedMessage id={title} />}
                helperText={errors[name] && `${name} is a required field`}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
                onChange={onChange}
              />
            );
          }}
          onChange={(values) => handleChange(values)}
          value={value}
        />
      )}
    />
  );
}
