// component
import Iconify from '@/components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
    // roles: ['ROLE_ADMIN', 'ROLE_MANAGER', 'ROLE_TEACHER'],
  },
  {
    title: 'users',
    path: '/dashboard/users',
    icon: getIcon('eva:people-fill'),
    // roles: ['ROLE_ADMIN'],
  },
];

export default sidebarConfig;
