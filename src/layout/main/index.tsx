import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const Main = memo(() => {
  return (
    <>
      main layout
      <Outlet />
    </>
  );
});

export default Main;
