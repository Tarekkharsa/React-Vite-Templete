import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '@/layouts/dashboard';
import LogoOnlyLayout from '@/layouts/LogoOnlyLayout';
//
import DashboardApp from '@/screens/DashboardApp';
import Login from '@/screens/Login';
import NotFound from '@/screens/Page404';
import Profile from '@/screens/Profile';
import EditProfile from '@/screens/Profile/Partials/EditProfile';
import Accounts from '@/screens/Users/Accounts';
import AddAccount from '@/screens/Users/Accounts/Add';
import EditAccount from '@/screens/Users/Accounts/EditAccount';
import ShowAccount from '@/screens/Users/Accounts/ShowAccount';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: 'app',
          element: <DashboardApp />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        { path: 'profile/edit', element: <EditProfile /> },
        {
          path: 'users',
          element: <Accounts />,
        },
        { path: 'users/add', element: <AddAccount /> },
        { path: 'users/:id/show', element: <ShowAccount /> },
        { path: 'users/:id/edit', element: <EditAccount /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
