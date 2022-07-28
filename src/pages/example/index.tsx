import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const Example = memo(() => {
  return (
    <>
      <div>example page</div>
      <Outlet />
    </>
  );
});

export default Example;
