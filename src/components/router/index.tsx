import React, { memo, useMemo } from 'react';
import { Router } from '@fortissimo/component';
import type { Route as RouteType } from '@fortissimo/component';

import layoutConfig from '@/layout';

const getLayoutComponent = (name: Page.LayoutKey) => {
  const Component = layoutConfig.get(name);
  return <Component />;
};

const transRoute = (routes: Page.Route[]) =>
  routes.map((item) => {
    const data: RouteType = {
      ...item
    };
    if (item.layoutComponent) {
      data.layout = item.layoutComponent;
    } else if (item.layout) {
      data.layout = getLayoutComponent(item.layout);
    }
    if (item.routes) {
      data.routes = transRoute(item.routes);
    }
    return data;
  });

export default memo((props: { config: Page.Route[] }) => {
  const route = useMemo(() => transRoute(props.config), [props.config]);

  return <Router config={route} />;
});
