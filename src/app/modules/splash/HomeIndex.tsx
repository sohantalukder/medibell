import React from 'react';
import BottomTab from '@components/bottom-tab';
import {bottomTabList} from '@constants/constants';

const HomeIndex: React.FC = () => {
  return <BottomTab tabLists={bottomTabList} />;
};

export default HomeIndex;
