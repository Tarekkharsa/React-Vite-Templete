import { yupResolver } from '@hookform/resolvers/yup'; // material
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import CustomInput from '@/components/Form/components/CustomInput';

// ----------------------------------------------------------------------

export default function EditProfileForm() {
  const navigate = useNavigate();
  const UserSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    phone_number: Yup.string().required('Phone number is required'),
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
      phone_number: '',
      email: '',
    },
  });

  const onSubmitForm = (data: any) => {
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
        <CustomInput label="email" name="email" control={control} errors={errors} />

        <CustomInput
          label="phone_number"
          name="phone_number"
          control={control}
          errors={errors}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 2 }}>
        <LoadingButton
          size="large"
          variant="contained"
          style={{ marginLeft: '1rem' }}
          onClick={() => navigate(-1)}>
          <FormattedMessage id="cancel" />
        </LoadingButton>
        <LoadingButton size="large" type="submit" variant="contained" loading={false}>
          <FormattedMessage id="save" />
        </LoadingButton>
      </Stack>
    </form>
  );
}
