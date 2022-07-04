import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FaSpinner } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

import * as colors from '@/styles/colors';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});
Spinner.defaultProps = {
  'aria-label': 'loading',
};

function FullPageSpinner() {
  return (
    <div
      css={{
        fontSize: '4em',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#1890FF',
      }}
    >
      <Spinner />
    </div>
  );
}

function ModalSpinner() {
  return (
    <div
      css={{
        fontSize: '4em',
        display: 'flex',
        height: '30vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#1890FF',
      }}
    >
      <Spinner />
    </div>
  );
}

type FullPageErrorFallbackProps = {
  error: Error;
};

function FullPageErrorFallback({ error }: FullPageErrorFallbackProps) {
  return (
    <div
      role="alert"
      css={{
        color: colors.danger,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>
        <FormattedMessage id="full_page_error" />
      </p>
      <pre>{error.message}</pre>
    </div>
  );
}

export { FullPageErrorFallback, FullPageSpinner, ModalSpinner };
