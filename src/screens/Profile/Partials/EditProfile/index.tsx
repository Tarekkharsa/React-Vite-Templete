import { Container, Stack, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import Page from '@/components/Page';

import EditProfileForm from '../EditProfileForm';

export default function EditProfile() {
  return (
    <Page title="Profile">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            <FormattedMessage id="update_profile" />
          </Typography>
        </Stack>
        <EditProfileForm />
      </Container>
    </Page>
  );
}
