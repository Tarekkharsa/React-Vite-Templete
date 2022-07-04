import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { QueryClient } from 'react-query';

import * as auth from '@/auth-provider';
import { FullPageErrorFallback, FullPageSpinner } from '@/components/lib';
import { useAsync } from '@/hooks/useAsync';
import { client } from '@/utils/api-client';

async function bootstrapAppData() {
  let user = null;

  const token = await auth.getToken();
  if (token) {
    // const data = await client(`getUserById?id=${id}`, {token})
    // queryCache.setQueryData('user', data.data, {
    //   staleTime: 5000,
    // })

    user = {
      token,
      userName: 'tarek',
    };
  }
  return user;
}

type ContextProps = {
  user: {
    token: string;
    image?: string;
    userName?: string;
    email?: string;
    id?: string;
  };
  login: () => Promise<void>;
  logout: () => void;
  register: () => void;
};

const AuthContext = createContext<ContextProps | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

function AuthProvider(props: any) {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync();
  const queryCache = new QueryClient();
  useEffect(() => {
    const appDataPromise = bootstrapAppData();
    run(appDataPromise);
  }, [run]);

  const login = useCallback(
    (form: { email: string; password: string }) =>
      auth.login(form).then((userRes) => {
        setData(userRes);
      }),
    [setData]
  );
  const register = useCallback(
    (form: { email: string; password: string }) =>
      auth.register(form).then((userRes) => setData(userRes)),
    [setData]
  );
  const logout = useCallback(() => {
    auth.logout();
    queryCache.clear();
    setData(null);
  }, [setData]);

  const value = useMemo(
    () => ({ user, login, logout, register }),
    [login, logout, register, user]
  );

  if (isLoading || isIdle) {
    return <FullPageSpinner />;
  }

  if (isError && !!error) {
    return <FullPageErrorFallback error={error} />;
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandled status: ${status}`);
}

function useAuth() {
  const context = useContext<ContextProps | undefined>(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

function useClient() {
  const { user } = useAuth();
  const token = user?.token;
  return useCallback(
    (endpoint: string, config?: any) => client(endpoint, { ...config, token }),
    [token]
  );
}

export { AuthProvider, useAuth, useClient };
