import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

function CustomInput({
  name,
  label,
  control,
  errors,
}: {
  name: string;
  label: string;
  control: any;
  errors: any;
}) {
  return (
    <Controller
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputRef={ref}
          fullWidth
          autoComplete={name}
          type="text"
          label={<FormattedMessage id={label} />}
          error={Boolean(errors[name] && errors[name])}
          helperText={errors[name] && errors[name].message}
        />
      )}
      name={name}
      control={control}
    />
  );
}

export default CustomInput;
