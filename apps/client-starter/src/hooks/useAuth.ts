import React from 'react';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const raw = JSON.stringify({
  email: 'demo@test.com',
  password: 'password',
});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
};

export function useAuth() {
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    fetch(`/api/auth/login`, requestOptions as any)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return user;
}
