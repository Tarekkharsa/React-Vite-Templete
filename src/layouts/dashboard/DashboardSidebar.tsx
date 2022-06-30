// material
import { Avatar, Box, Drawer, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// components
import Logo from '@/components/Logo';
import NavSection from '@/components/NavSection';
import Scrollbar from '@/components/Scrollbar';
//
import { useAuth } from '@/context/auth-context';
// mocks_
// hooks
import useResponsive from '@/hooks/useResponsive';

import sidebarConfig from './SidebarConfig';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

type DashboardSidebarProps = {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
};

export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar,
}: DashboardSidebarProps) {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="profile">
          <AccountStyle>
            <Avatar
              src={import.meta.env.VITE_REACT_APP_STORAGEURL_API_URL + user.image}
              alt="photoURL"
            />
            <Box
              sx={{
                ml: 2,
              }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user.userName}
              </Typography>
              {/* <Typography variant="body2" sx={{color: 'text.secondary'}}>
                {account.role}
              </Typography> */}
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}>
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
              right: 0,
            },
          }}>
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
