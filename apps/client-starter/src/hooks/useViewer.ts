import React from 'react';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const raw = (email, password) =>
  JSON.stringify({
    email,
    password,
  });

const requestOptions = (email, password) => ({
  method: 'POST',
  headers: myHeaders,
  body: raw(email, password),
  redirect: 'follow',
});

const login = (email, password) => {
  return fetch(`/api/auth/login`, requestOptions(email, password) as any);
};

export function useAuthentication() {
  return { login };
}

// todo: rename useViewer
export function useViewer() {
  const [user, setUser] = React.useState<
    Record<string, any> | undefined | null
  >();

  React.useLayoutEffect(() => {
    fetch(`/api/auth/whoami`, {
      credentials: 'include',
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((data) => setUser(data || null))
      .catch((err) => setUser(null));
  }, []);

  return user;
}
