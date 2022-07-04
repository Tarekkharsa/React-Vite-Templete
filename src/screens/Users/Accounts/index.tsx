// material
import { Button, Container, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';

import Iconify from '@/components/Iconify';
// components
import Page from '@/components/Page';
//
import ReactTable from '@/components/ReactTable';

import { tableColumns, tableHiddenColumns } from './data';

// ----------------------------------------------------------------------

export default function Accounts() {
  const columns = useMemo(() => tableColumns, []);
  const hiddenColumns = useMemo(() => tableHiddenColumns, []);
  const data = [];

  return (
    <Page title="Users | Accounts">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            <FormattedMessage id="users_accounts" />
          </Typography>
          <div>
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/users/add"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              <FormattedMessage id="new_user_account" />
            </Button>
          </div>
        </Stack>
        <ReactTable
          columns={columns}
          hiddenColumns={hiddenColumns}
          data={data}
          loading={false}
          totalRecords={data?.length}
        />
      </Container>
    </Page>
  );
}
