import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/store';

import '@/style/index.global.less';

import Page from '@/pages';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('main')
);

// 启用热模块替换
// eslint-disable-next-line
// @ts-ignore
module.hot?.accept();
