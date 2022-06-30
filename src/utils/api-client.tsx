import { QueryCache } from 'react-query';

import * as auth from '@/auth-provider';

type ClientProps = {
  data?: any;
  token?: string;
  headers?: any;
  customConfig: any;
};

const apiURL = import.meta.env.REACT_APP_API_URL;
async function client(
  endpoint: string,
  { data, token, headers: customHeaders, ...customConfig } = {} as ClientProps
) {
  const queryCache = new QueryCache();

  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };
  return window.fetch(`${apiURL}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      queryCache.clear();
      await auth.logout();
      // refresh the page for them
      const customWindow: any = window.location;
      window.location.assign(customWindow);
      return Promise.reject({ message: 'Please re-authenticate.' });
    }
    const resData = await response.json();
    if (response.ok) {
      return resData;
    }
    return Promise.reject(resData);
  });
}

export { client };
