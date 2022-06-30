import { Avatar, Stack, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import Label from '@/components/Label';
import UserMoreMenu from '@/sections/@dashboard/user/UserMoreMenu';

export const tableHiddenColumns = ['id'];
export const tableColumns = [
  {
    Header: 'id',
    accessor: 'id',
    disableFilters: true,
  },
  {
    Header: 'firstName',
    accessor: 'firstname',
    disableFilters: true,
    style: {
      padding: '10px',
    },
    Cell: ({ row }) => {
      return (
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={row.original.firstname} src={row.original.image} />
          <Typography variant="subtitle2" noWrap>
            {row.original.firstname}
          </Typography>
        </Stack>
      );
    },
  },
  {
    Header: 'email',
    accessor: 'email',
    disableFilters: true,
  },
  {
    Header: 'status',
    accessor: 'status',
    disableSortBy: true,
    Cell: () => {
      return (
        <Label variant="ghost" color="success">
          <FormattedMessage id="active" />
        </Label>
      );
    },
  },
  {
    Header: 'actions',

    accessor: 'actions',
    Cell: ({ row }: any) => {
      return <UserMoreMenu id={row.values.id} />;
    },
    style: {
      textAlign: 'right',
    },
  },
  // {
  //   Header: 'Name',
  //   accessor: 'name',
  //   style: {
  //     padding: '0',
  //   },
  //   Cell: ({row}) => {
  //     return (
  //       <Stack direction="row" alignItems="center" spacing={2}>
  //         <Avatar alt={row.original.name} src={row.original.avatarUrl} />
  //         <Typography variant="subtitle2" noWrap>
  //           {row.original.name}
  //         </Typography>
  //       </Stack>
  //     )
  //   },
  // },
  // {
  //   Header: 'Company',
  //   accessor: 'company',
  // },
  // {
  //   Header: 'Role',
  //   accessor: 'role',
  // },
  // {
  //   Header: 'Verified',
  //   accessor: 'isVerified',
  //   Cell: ({row}) => {
  //     return row.original.isVerified ? 'Yes' : 'No'
  //   },
  // },
  // {
  //   Header: 'Status',
  //   accessor: 'status',
  //   Cell: ({row}) => {
  //     return (
  //       <Label
  //         variant="ghost"
  //         color={(row.original.status === 'banned' && 'error') || 'success'}
  //       >
  //         {sentenceCase(row.original.status)}
  //       </Label>
  //     )
  //   },
  // },
];
