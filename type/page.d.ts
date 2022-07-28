declare namespace Page {
  type LayoutKey = 'default' | 'main';

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
