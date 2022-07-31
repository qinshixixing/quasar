declare namespace Page {
  type LayoutKey = 'default' | 'admin';

  // 页面鉴权类型:0-不需要鉴权，1-需要鉴权，2-只能在非鉴权状态访问
  type AuthType = 0 | 1 | 2;

  interface Route {
    path: string;
    component: React.ReactNode;
    layout?: LayoutKey;
    layoutComponent?: React.ReactNode;
    routes?: Route[];
    childRoutes?: boolean;
    root?: boolean;
  }
}
