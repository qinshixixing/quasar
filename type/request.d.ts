declare namespace Request {
  type Data = { [propName: string]: any };
  type Method = 'get' | 'post';

  interface Params {
    url: string;
    baseURL?: string;
    data?: Data;
    params?: Data;
    message?: boolean;
    header?: Data;
    method?: Method;
  }

  interface BaseParams extends Params {
    service: string;
  }
}
