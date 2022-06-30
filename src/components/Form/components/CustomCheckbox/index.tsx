import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
// TODO: display error message
export default function CustomCheckbox({
  label,
  control,
  name,
}: {
  label: string;
  control: any;
  name: string;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
            />
          }
          label={<FormattedMessage id={label} />}
        />
      )}
    />
  );
}
