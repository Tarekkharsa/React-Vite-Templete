// pretend this is firebase, netlify, or auth0's code.
// you shouldn't have to implement something like this in your own app

const localStorageKey = '__auth_provider_token__';
const localStorageID = '__auth_provider_id__';
// an auth provider wouldn't use your client, they'd have their own
// so that's why we're not just re-using the client
const authURL = import.meta.env.VITE_REACT_APP_AUTH_URL;
async function client(endpoint: string, data: any) {
  const config = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    },
  };

  return window.fetch(`${authURL}/${endpoint}`, config).then(async (response) => {
    const res = await response.json();
    if (response.ok) {
      return res;
    }
    return Promise.reject(res);
  });
}

async function getToken() {
  // if we were a real auth provider, this is where we would make a request
  // to retrieve the user's token. (It's a bit more complicated than that...
  // but you're probably not an auth provider so you don't need to worry about it).
  return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse(user: any) {
  window.localStorage.setItem(localStorageKey, user.token);
  return user;
}

function login({ email, password }: { email: string; password: string }) {
  return client('login', { email, password }).then(handleUserResponse);
}

function register({ email, password }: { email: string; password: string }) {
  return client('register', { email, password }).then(handleUserResponse);
}

async function logout() {
  window.localStorage.removeItem(localStorageKey);
  window.localStorage.removeItem(localStorageID);
}

export { getToken, localStorageKey, login, logout, register };
