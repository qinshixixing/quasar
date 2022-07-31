import type { AxiosRequestConfig, AxiosInstance, ResponseType } from 'axios';
import {
  requestBase as baseRequest,
  setRequestAuth as setRequestAuthBase
} from '@fortissimo/request';
import type { ResponseConfig } from '@fortissimo/request';

type Data = Record<string, any>;
type Method = 'get' | 'post';

export function handleErrorMsg(msg?: string) {
  // console.error(msg);
}

interface RequestBaseParams {
  url: string;
  data?: Data;
  params?: Data;
  header?: Data;
  method?: Method;
  service?: string;
  responseType?: ResponseType;
  showErrorMsg?: boolean;
}

type RequestInstanceType = 'data' | 'blob';

const requestInstance: Record<RequestInstanceType, AxiosInstance> = {
  data: baseRequest({
    baseUrl: '/api',
    successCode: 200,
    codeKey: 'respCode',
    msgKey: 'respMsg'
  }),
  blob: baseRequest({
    baseUrl: '/api',
    successCode: undefined,
    codeKey: '',
    dataKey: ''
  })
};

export async function request(
  {
    service = '',
    url = '',
    method = 'get',
    data = {},
    params = {},
    header = {},
    responseType,
    showErrorMsg = true
  }: RequestBaseParams,
  type: RequestInstanceType = 'data'
): Promise<any> {
  const options: AxiosRequestConfig = {
    url: `${service}${url}`,
    method,
    headers: header,
    responseType
  };
  if (method === 'get') {
    options.params = { ...params, ...data };
  } else {
    options.data = data;
    options.params = params;
  }
  try {
    const data = await requestInstance[type](options);
    return Promise.resolve(data);
  } catch (err: any) {
    const error: ResponseConfig = err;
    const checkLoginCode = hasSetRequest[type];
    const loginCode = loginCodeList[type];
    const isLogin = checkLoginCode && loginCode.includes(error.code);
    if (error.msg) console.info(error.msg);
    if (error.msg && showErrorMsg && !isLogin) handleErrorMsg(error.msg);
    return Promise.reject(error);
  }
}

interface SetRequestAuthParams {
  token: string;
  localKey?: string[];
  loginUrl: string;
}

const loginCodeList: Record<RequestInstanceType, number[]> = {
  data: [],
  blob: []
};

const hasSetRequest: Record<RequestInstanceType, boolean> = {
  data: false,
  blob: false
};

export async function setRequestAuth(
  params: SetRequestAuthParams,
  type: RequestInstanceType = 'data'
) {
  const localKey = params.localKey || ['token'];
  if (hasSetRequest[type]) return;
  const tokenInfo: Record<string, string> = {
    token: params.token
  };
  setRequestAuthBase(requestInstance[type], {
    tokenInfo,
    tokenStorageKey: localKey,
    loginStatusCode: [401, 403],
    loginCode: loginCodeList[type],
    loginUrl: params.loginUrl
  });
  hasSetRequest[type] = true;
}

export async function setAllRequestAuth(params: SetRequestAuthParams) {
  const requestInstanceTypeList: RequestInstanceType[] = ['data', 'blob'];
  requestInstanceTypeList.forEach((item) => {
    setRequestAuth(params, item);
  });
}
