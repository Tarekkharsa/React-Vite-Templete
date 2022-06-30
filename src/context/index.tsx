import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from './auth-context';

type AppProps = {
  children: React.ReactNode;
};

function AppProviders({ children }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retry(failureCount, error: any) {
          if (error.status === 404) return false;
          if (failureCount < 2) return true;
          return false;
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}

export { AppProviders };
