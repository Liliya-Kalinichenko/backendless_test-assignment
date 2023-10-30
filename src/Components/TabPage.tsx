import React, { lazy, Suspense } from 'react';
import { Tab } from '../types/Tab';
import { Loader } from './Loader/Loader';

type Props = {
  tab: Tab,
}

const TabPage: React.FC<Props> = ({ tab }) => {
  const TabPanel = lazy(() => import(`./${tab.path}`));
  
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <TabPanel />
      </Suspense>
    </div>
  );
}

export default TabPage;