import { useAuth } from '@/context/auth-context';

export default function useRoles() {
  const { user } = useAuth();
  const checkIfRolesInUserRoles = (roles) => {
    if (user.permissions) {
      return roles.some((role) => user.permissions.includes(role));
    }
    return false;
  };

  return { checkIfRolesInUserRoles };
}
