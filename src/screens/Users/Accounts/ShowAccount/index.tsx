import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';

import Iconify from '@/components/Iconify';
import Page from '@/components/Page';
import { CustomTheme } from '@/theme/ThemeTypes';

const AccountDetailsStyle = styled(List)(({ theme }) => ({
  width: '68%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: ' 0 24px 24px',
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: (theme as CustomTheme).palette.grey[500_12],
}));
const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '30%',
  height: '350px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: (theme as CustomTheme).palette.grey[500_12],
}));

const AvatarStyle = styled(Avatar)(() => ({
  width: '50%',
  height: '45%',
}));
const ImgStyle = styled(Avatar)(() => ({
  width: '150px',
  height: '145px',
  borderRadius: 'unset',
}));
const ContainerStyle = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

const CustomListItem = styled(ListItem)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})) as any;

export default function ShowAccount() {
  const user = {
    name: 'John Doe',
    firstname: 'John',
    lastname: 'Doe',
    username: 'johndoe',
    email: 'test@test.com',
    image: 'https://i.pravatar.cc/300',
    certificateimage: 'https://i.pravatar.cc/300',
  };
  return (
    <Page title="User | Account">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            <FormattedMessage id="account_details" />
          </Typography>

          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/users/accounts/1/edit"
            startIcon={<Iconify icon="eva:edit-fill" />}>
            <FormattedMessage id="edit_user" />
          </Button>
        </Stack>
        <ContainerStyle>
          <AccountStyle>
            <AvatarStyle
              src={import.meta.env.REACT_APP_STORAGEURL_API_URL + user.image}
              alt="photoURL"
            />
            <Box sx={{ ml: 2, mt: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user.firstname} {user.lastname}
              </Typography>
              {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {account.role}
              </Typography> */}
            </Box>
          </AccountStyle>
          <AccountDetailsStyle>
            <CustomListItem button>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                <FormattedMessage id="firstName" />
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user.firstname}
              </Typography>
            </CustomListItem>
            <Divider variant="inset" component="li" />

            <CustomListItem button>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                <FormattedMessage id="lastName" />
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user.lastname}
              </Typography>
            </CustomListItem>
            <Divider variant="inset" component="li" />

            <CustomListItem button>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                <FormattedMessage id="userName" />
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user.username}
              </Typography>
            </CustomListItem>
            <Divider variant="inset" component="li" />

            <CustomListItem button>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                <FormattedMessage id="email" />
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user.email}
              </Typography>
            </CustomListItem>
            <Divider variant="inset" component="li" />

            <CustomListItem>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                <FormattedMessage id="certificate_image" />
              </Typography>
              <ImgStyle
                src={import.meta.env.REACT_APP_STORAGEURL_API_URL + user.certificateimage}
                alt="photoURL"
              />
            </CustomListItem>
            <Divider variant="inset" component="li" />
          </AccountDetailsStyle>
        </ContainerStyle>
      </Container>
    </Page>
  );
}
