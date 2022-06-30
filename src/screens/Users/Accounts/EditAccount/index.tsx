import { Container, Stack, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import Page from '@/components/Page';

import UserForm from '../Partials/UserForm';

export default function EditAccount() {
  return (
    <Page title="User | Account">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            <FormattedMessage id="edit_user" />
          </Typography>
        </Stack>
        <UserForm />
      </Container>
    </Page>
  );
}
