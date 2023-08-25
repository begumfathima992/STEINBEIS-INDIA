import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

import './Tab.css';

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState('login');
  const history = useHistory();

  const handleTabChange = (tab) => {
    setActiveTab(tab || 'CreateUsers');
    if (tab === '') {
      history.push('/');
    } else if (tab === 'Login') {
      history.push('/login');
    }
  };

  return (
    <div className='flex justify-center mt-10'>
      <Tabs activeKey={activeTab} onSelect={handleTabChange} id='auth-tabs'>
        <Tab
          eventKey='Login'
          title='LOGIN'
          className='text-2xl font-bold  m-8 mt-24  border-transparent'
        ></Tab>
        <Tab
          eventKey='CreateUsers'
          title='CreateUsers'
          className='text-2xl font-bold  m-8 mt-24  border-transparent'
        ></Tab>
      </Tabs>
    </div>
  );
};

export default AuthTabs;
