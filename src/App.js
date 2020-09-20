import React from 'react';
import './App.less';
import SecurityLayout from '@/layouts/SecurityLayout';
import BasicLayout from '@/layouts/BasicLayout';

function App() {
  return (
    <SecurityLayout>
      <BasicLayout></BasicLayout>
    </SecurityLayout>
  );
}

export default App;
