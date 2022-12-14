import { Card, Container, Stack, Typography } from '@mui/material';
// import {useAsync} from './utils/hooks'
// material
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';

// layouts
// components
import Page from '@/components/Page';
import { useAuth } from '@/context/auth-context';
import { LoginForm } from '@/sections/authentication/login';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

function UnauthenticatedApp() {
  const { login } = useAuth();
  return (
    <RootStyle title="Login | Minimal-UI">
      <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
          <FormattedMessage id="welecome_back" />
        </Typography>
        <img src="/static/illustrations/login.svg" alt="login" />
      </SectionStyle>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              <FormattedMessage id="sign_in_to_continue" />
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              <FormattedMessage id="enter_your_details_below" />
            </Typography>
          </Stack>
          <LoginForm onSubmit={login} />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

export default UnauthenticatedApp;
