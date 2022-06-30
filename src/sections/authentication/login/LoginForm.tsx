import { yupResolver } from '@hookform/resolvers/yup'; // material
import { LoadingButton } from '@mui/lab';
import { Alert, Link, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';

import CustomCheckbox from '@/components/Form/components/CustomCheckbox';
import CustomInput from '@/components/Form/components/CustomInput';
import InputPassword from '@/components/Form/components/InputPassword';
import { useAsync } from '@/hooks/useAsync';

// ----------------------------------------------------------------------

export default function LoginForm({ onSubmit }) {
  const { isLoading, isError, error, run } = useAsync();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: true,
    },
  });

  const onSubmitForm = (data) => {
    const { email, password } = data;
    run(onSubmit({ email, password }));
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmitForm)}>
      <Stack spacing={3}>
        {isError ? <Alert severity="error">{error.message}</Alert> : null}
        <CustomInput label="email" name="email" control={control} errors={errors} />
        <InputPassword
          label="password"
          name="password"
          control={control}
          errors={errors}
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <CustomCheckbox
          label="remember_me"
          name="remember"
          control={control}
          errors={errors}
        />
        <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
          <FormattedMessage id="forgot_password" />
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isLoading}
      >
        <FormattedMessage id="login" />
      </LoadingButton>
    </form>
  );
}
