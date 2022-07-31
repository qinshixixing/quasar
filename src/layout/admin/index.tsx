import React, { memo, useCallback } from 'react';
import { AdminLayout } from '@fortissimo/component';
import type { LayoutAdminHeaderMenu } from '@fortissimo/component';

import { title, logo, corpName } from '@/data';
import { menuList } from '@/pages';
import { logout } from '@/util';

type OptType = 'modifyInfo' | 'modifyPwd' | 'logout';

const headerMenuList: LayoutAdminHeaderMenu<OptType>[] = [
  { key: 'logout', name: '注销' }
];

const Main = memo(() => {
  const onHeaderMenuOpt = useCallback((optKey: OptType) => {
    switch (optKey) {
      case 'logout':
        logout();
    }
  }, []);

  return (
    <>
      <AdminLayout
        title={title}
        logo={logo}
        userName={'admin'}
        headerMenuList={headerMenuList}
        menuList={menuList}
        collapsedWidth={80}
        expandWidth={265}
        onHeaderMenuOpt={onHeaderMenuOpt}
        corpName={corpName}
        canCollapsed
        copyrightStart={2022}
      />
    </>
  );
});

export default Main;
