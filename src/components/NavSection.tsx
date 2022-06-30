// material
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { matchPath, NavLink as RouterLink, useLocation } from 'react-router-dom';

//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(2.5),
    color: theme.palette.text.secondary,
    '&:before': {
      top: 0,
      right: 0,
      width: 3,
      bottom: 0,
      content: "''",
      display: 'none',
      position: 'absolute',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: theme.palette.primary.main,
    },
  })
) as typeof ListItemButton;

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}) as typeof ListItemIcon;

// ----------------------------------------------------------------------
type ItemObject = {
  title: string;
  path: string;
  info: string;
  icon: string;
  children: any;
};
interface NavItemProps {
  item: ItemObject;
  active: Function;
}

function NavItem({ item, active }: NavItemProps) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, icon, info, children } = item;
  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev: boolean) => !prev);
  };

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' },
  };

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium',
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={<FormattedMessage id={title} />} />
          {info && info}
          {theme.direction === 'ltr' ? (
            <Iconify
              icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
              sx={{ width: 16, height: 16, ml: 1 }}
            />
          ) : (
            <Iconify
              icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-back-fill'}
              sx={{ width: 16, height: 16, ml: 1 }}
            />
          )}
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((ele: ItemObject) => {
              const isActiveSub = active(ele.path);

              return (
                <ListItemStyle
                  key={ele.title}
                  component={RouterLink}
                  to={ele.path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'text.disabled',
                        transition: (them) => them.transitions.create('transform'),
                        ...(isActiveSub && {
                          transform: 'scale(2)',
                          bgcolor: 'primary.main',
                        }),
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText
                    disableTypography
                    primary={<FormattedMessage id={title} />}
                  />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={<FormattedMessage id={title} />} />
      {info && info}
    </ListItemStyle>
  );
}

type NavSectionProps = {
  navConfig: any[];
};

export default function NavSection({ navConfig, ...other }: NavSectionProps) {
  const { pathname } = useLocation();

  const match = (path: string) =>
    path ? !!matchPath({ path, end: false }, pathname) : false;

  return (
    <Box {...other}>
      <List disablePadding>
        {navConfig.map((item) => {
          // if (checkIfRolesInUserRoles(item.roles)) {
          return <NavItem key={item.title} item={item} active={match} />;
          // }
        })}
      </List>
    </Box>
  );
}
