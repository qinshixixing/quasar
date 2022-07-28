import React, { memo } from 'react';
import { Router } from '@/components';

import Example from '@/pages/example';

const pages: Page.Route[] = [
  {
    path: '',
    component: <div>hello, world!</div>
  },
  {
    path: 'expample',
    component: <Example />,
    routes: [
      {
        path: '',
        component: <div>expample-index</div>,
        layout: 'default'
      },
      {
        path: 'one',
        component: <div>expample-one</div>,
        layout: 'default'
      },
      {
        path: 'two',
        component: <div>expample-two</div>,
        layout: 'main'
      },
      {
        path: 'three',
        component: <div>expample-three</div>,
        layout: 'main',
        root: true
      },
      {
        path: '*',
        component: <div>expample-other</div>
      }
    ]
  },
  {
    path: 'about',
    component: <div>about</div>,
    layout: 'default'
  },
  {
    path: 'no-layout',
    component: <div>no-layout</div>
  }
];

const Page = memo(() => {
  return <Router config={pages} />;
});

export default Page;
