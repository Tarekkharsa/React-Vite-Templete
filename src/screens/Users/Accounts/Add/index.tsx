import { Container, Stack, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import Page from '@/components/Page';

import UserForm from '../Partials/UserForm';

export default function AddAccount() {
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            <FormattedMessage id="create_new_user" />
          </Typography>
        </Stack>
        <UserForm />
      </Container>
    </Page>
  );
}
