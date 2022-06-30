import { lazy, Suspense } from 'react';
import { RecoilRoot } from 'recoil';

// components
import { BaseOptionChartStyle } from '@/components/charts/BaseOptionChart';
import { FullPageSpinner } from '@/components/lib';
import ScrollToTop from '@/components/ScrollToTop';
import { useAuth } from '@/context/auth-context';
// theme
import ThemeConfig from '@/theme';
import GlobalStyles from '@/theme/globalStyles';
import { I18nProvider } from '@/utils/i18n';

const AuthenticatedApp = lazy(
  () => import(/* webpackPrefetch: true */ '@/authenticated-app')
);
const UnauthenticatedApp = lazy(() => import('@/unauthenticated-app'));

function App() {
  const { user } = useAuth();
  return (
    <RecoilRoot>
      <ThemeConfig>
        <I18nProvider>
          <ScrollToTop />
          <GlobalStyles />
          <BaseOptionChartStyle />
          <Suspense fallback={<FullPageSpinner />}>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
          </Suspense>
        </I18nProvider>
      </ThemeConfig>
    </RecoilRoot>
  );
}

export default App;
