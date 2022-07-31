export function getToken(): string {
  const searchParams = new URLSearchParams(window.location.search);

  let token: string;
  if (searchParams.has('token')) token = searchParams.get('token');

  if (token) localStorage.setItem('token', token);
  else token = localStorage.getItem('token');

  return token;
}

export async function getTokenAsync(): Promise<string> {
  return getToken();
}

export function removeToken() {
  localStorage.removeItem('token');
}
