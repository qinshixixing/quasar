import React from 'react';

import { setRoutes, setMenuList } from '@/util';
import type { PageInfo } from '@/util';

import Example from '@/pages/example';

const pages: PageInfo[] = [
  {
    path: '',
    component: <div>hello, world!</div>,
    title: 'index'
  },
  {
    path: 'example',
    component: <Example />,
    title: 'example',
    children: [
      {
        path: '',
        component: <div>example-index</div>,
        layout: 'default',
        title: 'example-index'
      },
      {
        path: 'one',
        component: <div>example-one</div>,
        layout: 'default',
        title: 'example-one'
      },
      {
        path: 'example-two',
        component: <div>example-two</div>,
        layout: 'admin',
        title: 'example-two'
      },
      {
        path: '*',
        component: <div>example-other</div>,
        title: 'example-other'
      }
    ]
  },
  {
    path: 'no-layout',
    component: <div>no-layout</div>,
    title: 'no-layout'
  }
];

export const routes = setRoutes(pages, '', true);
export const menuList = setMenuList(pages, '');
