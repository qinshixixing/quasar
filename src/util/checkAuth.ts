import { loginUrl, noAuthUrl, loginTargetUrl } from '@/data';
import { getToken } from '@/util';
import { setAllRequestAuth } from '@/request';

export function checkPageAuthType(path: string): Page.AuthType {
  if (path === loginUrl) return 2;
  const isNoAuth = noAuthUrl.some((item) => {
    if (item.endsWith('/*')) {
      return (
        item.slice(0, item.lastIndexOf('/')) ===
        path.slice(0, path.lastIndexOf('/'))
      );
    }
    return item === path;
  });
  return isNoAuth ? 0 : 1;
}

export function checkAuth(path: string) {
  const pageType = checkPageAuthType(path);
  const token = getToken();
  if (token) {
    setAllRequestAuth({
      token: token,
      loginUrl: loginUrl,
      localKey: ['token']
    });
    if (pageType === 2) window.location.href = loginTargetUrl;
    return pageType !== 2;
  } else {
    if (pageType === 1) window.location.href = loginUrl;
    return pageType !== 1;
  }
}
