import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

function CustomDatePicker({ name, label, control }: any) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        // defaultValue={null}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
          <DateTimePicker
            label={<FormattedMessage id={label} />}
            value={value}
            onChange={(val) => onChange(val)}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={invalid ? error?.message : null}
                error={invalid}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
