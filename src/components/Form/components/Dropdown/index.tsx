import { Autocomplete, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

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
})) as typeof TextField;

export default function Dropdown({
  title,
  name,
  width,
  control,
  errors,
  multiple = false,
  options,
  handleChange,
}: any) {
  const [open, setOpen] = useState(false);

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
          options={options}
          renderInput={(params) => {
            return (
              <CustomTextField
                {...params}
                label={<FormattedMessage id={title} />}
                helperText={errors[name] && `${name} is a required field`}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: <>{params.InputProps.endAdornment}</>, // eslint-disable-line
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
