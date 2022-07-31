import { FC } from 'react';
import Default from '@/layout/default';
import Admin from '@/layout/admin';

const layoutConfig: Map<Page.LayoutKey, FC> = new Map();
layoutConfig.set('default', Default);
layoutConfig.set('admin', Admin);

export default layoutConfig;
