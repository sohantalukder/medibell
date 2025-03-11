import React from 'react';
import MainProvider from '@provider/Main.provider';
import RouterIndex from '@routes/RouterIndex.routes';

const MainIndex: React.FC = () => {
  return (
    <MainProvider>
      <RouterIndex />
    </MainProvider>
  );
};

export default MainIndex;
