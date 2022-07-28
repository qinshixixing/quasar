import { FC } from 'react';
import Default from '@/layout/default';
import Main from '@/layout/main';

const layoutConfig: Map<Page.LayoutKey, FC> = new Map();
layoutConfig.set('default', Default);
layoutConfig.set('main', Main);

export default layoutConfig;
