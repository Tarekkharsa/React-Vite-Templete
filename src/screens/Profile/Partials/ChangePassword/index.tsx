import { yupResolver } from '@hookform/resolvers/yup'; // material
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import * as Yup from 'yup';

import InputPassword from '@/components/Form/components/InputPassword';

// ----------------------------------------------------------------------

export default function ChangePassword() {
  const PasswordSchema = Yup.object().shape({
    old_password: Yup.string().required('Old Password is required'),
    new_password: Yup.string().required('New Password is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PasswordSchema),
    defaultValues: {
      old_password: '',
      new_password: '',
    },
  });

  const onSubmitForm = (data) => {
    console.log('data', data);
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmitForm)}>
      <Stack spacing={3}>
        {/* {isError ? <Alert severity="error">{error.message}</Alert> : null} */}
        <InputPassword
          label="old_password"
          name="old_password"
          control={control}
          errors={errors}
        />
        <InputPassword
          label="new_password"
          name="new_password"
          control={control}
          errors={errors}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 2 }}>
        <LoadingButton size="large" type="submit" variant="contained" loading={false}>
          <FormattedMessage id="save" />
        </LoadingButton>
      </Stack>
    </form>
  );
}
