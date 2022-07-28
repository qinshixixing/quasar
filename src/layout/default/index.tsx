import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const Default = memo(() => {
  return (
    <>
      default layout
      <Outlet />
    </>
  );
});

export default Default;
