import { yupResolver } from '@hookform/resolvers/yup'; // material
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import CustomInput from '@/components/Form/components/CustomInput';

// ----------------------------------------------------------------------

export default function UserForm() {
  const navigate = useNavigate();
  const UserSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    username: Yup.string(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
    },
  });

  const onSubmitForm = (data) => {
    console.log('data', data);
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmitForm)}>
      <Stack spacing={3}>
        {/* {isError ? <Alert severity="error">{error.message}</Alert> : null} */}
        <CustomInput
          label="firstName"
          name="firstname"
          control={control}
          errors={errors}
        />
        <CustomInput label="lastName" name="lastname" control={control} errors={errors} />

        <CustomInput label="userName" name="username" control={control} errors={errors} />

        <CustomInput label="email" name="email" control={control} errors={errors} />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 2 }}>
        <LoadingButton
          onClick={() => navigate(-1)}
          size="large"
          variant="contained"
          sx={{ mr: 2 }}
        >
          <FormattedMessage id="cancel" />
        </LoadingButton>
        <LoadingButton size="large" type="submit" variant="contained" loading={false}>
          <FormattedMessage id="save" />
        </LoadingButton>
      </Stack>
    </form>
  );
}
