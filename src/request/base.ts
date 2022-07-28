import type { AxiosRequestConfig } from 'axios';
import { requestBase, setRequestAuth } from '@fortissimo/request';

const baseUrl = '';

const requestInstance = requestBase({
  baseUrl
});

export async function request({
  service = '',
  url = '',
  method = 'get',
  data = {},
  params = {},
  message = true,
  header = {}
}: Request.BaseParams): Promise<any> {
  const options: AxiosRequestConfig = {
    url: `${service}${url}`,
    method,
    headers: header
  };
  if (method === 'get') {
    options.params = { ...params, ...data };
  } else {
    options.data = data;
    options.params = params;
  }
  try {
    const data = await requestInstance(options);
    return Promise.resolve(data);
  } catch (error) {
    if (message && error.message) window.alert(error.message);
    return Promise.reject(error);
  }
}

// export function setRequest(token: string, loginUrl: string): void {
//   setRequestAuth(requestInstance, { token, loginUrl });
// }
