import { loginUrl } from '@/data';

import { removeToken } from '@/util';

export function logout() {
  removeToken();
  window.location.href = loginUrl;
}
