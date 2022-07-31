import React from 'react';
import { Navigate } from 'react-router-dom';
import { DLOpt, LayoutSidebarMenu } from '@fortissimo/component';

export interface PageInfo extends Page.Route, LayoutSidebarMenu {
  menu?: boolean;
  opts?: DLOpt[];
  children?: PageInfo[];
}

export const setRoutes = (
  pages: PageInfo[],
  parentPath: string,
  allowEmptyPath?: boolean
): Page.Route[] => {
  const result: Page.Route[] = [];
  pages.forEach((item, index) => {
    const totalPath = [parentPath, item.path].join('/');
    if (index === 0 && !allowEmptyPath) {
      result.push({
        path: '',
        component: <Navigate to={totalPath} />
      });
    }
    const data: Page.Route = {
      ...item
    };
    Reflect.deleteProperty(data, 'title');
    Reflect.deleteProperty(data, 'menu');
    Reflect.deleteProperty(data, 'children');
    Reflect.deleteProperty(data, 'opts');
    if (item.children) {
      data.routes = setRoutes(item.children, totalPath, allowEmptyPath);
    }
    result.push(data);
  });
  return result;
};

export const setMenuList = (
  pages: PageInfo[],
  parentPath: string
): LayoutSidebarMenu[] => {
  const result: LayoutSidebarMenu[] = [];
  pages.forEach((item) => {
    if (!item.menu) return;
    const totalPath = [parentPath, item.path].join('/');
    const data: LayoutSidebarMenu = {
      path: totalPath,
      title: item.title,
      icon: item.icon
    };
    if (item.children) {
      data.children = setMenuList(item.children, item.path);
    }
    result.push(data);
  });
  return result;
};
