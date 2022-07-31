import React, { memo, useMemo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { useMount } from '@fortissimo/hook';

import { StoreProvider } from '@/store';
import { checkAuth, initData } from '@/util';

import '@/style/index.global.less';

import { routes } from '@/pages';
import { Router } from '@/components';

const Page = memo(() => {
  const location = useLocation();
  const pathname = useMemo(() => location.pathname, [location]);
  const [show, setShow] = useState(false);

  useMount(async () => {
    const check = checkAuth(pathname);
    const result = await initData();
    setShow(check && result);
  });

  // 路由变化时检查页面鉴权状态
  useEffect(() => {
    if (!show) return;
    checkAuth(pathname);
  }, [pathname]);

  return show && <Router config={routes} />;
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <Page />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('main')
);

// 启用热模块替换
// eslint-disable-next-line
// @ts-ignore
module.hot?.accept();
