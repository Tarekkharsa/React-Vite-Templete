import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';

import Iconify from '@/components/Iconify';
import Page from '@/components/Page';
import { CustomTheme } from '@/theme/ThemeTypes';

import ChangePassword from './Partials/ChangePassword';
import Settings from './Partials/Settings';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: '100%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const AccountDetailsStyle = styled(List)(({ theme }) => ({
  width: '68%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: (theme as CustomTheme).palette.grey[500_12],
}));
const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '30%',
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
const ContainerStyle = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));
const EditSectionStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: theme.spacing(3),
}));
const CustomListItem = styled(ListItem)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})) as any;

export default function Profile() {
  const user = {
    name: 'John Doe',
    firstname: 'John',
    lastname: 'Doe',
    username: 'johndoe',
    email: 'test@test.com',
    image: 'https://i.pravatar.cc/300',
  };
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Page title="User | Profile">
      <ContainerStyle>
        <AccountStyle>
          <AvatarStyle
            src={import.meta.env.VITE_REACT_APP_STORAGEURL_API_URL + user.image}
            alt="photoURL"
          />
          <Box sx={{ ml: 2, mt: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              {user.firstname} {user.lastname}
            </Typography>
            {/* <Typography variant="body2" sx={{color: 'text.secondary'}}>
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
        </AccountDetailsStyle>
      </ContainerStyle>
      <EditSectionStyle>
        <Button
          variant="contained"
          component={RouterLink}
          to="/dashboard/profile/edit"
          startIcon={<Iconify icon="eva:edit-2-outline" />}>
          <FormattedMessage id="edit_account" />
        </Button>
      </EditSectionStyle>
      <Box sx={{ width: '100%', mt: 5 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label={<FormattedMessage id="settings" />} {...a11yProps(0)} />

            <Tab label={<FormattedMessage id="change_password" />} {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Settings />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ChangePassword />
        </TabPanel>
      </Box>
    </Page>
  );
}
