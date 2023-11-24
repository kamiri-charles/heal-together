import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import { DashboardContent } from './DashboardContent';
import './styles.scss';

const Dashboard = () => {
  const [currentSection, setCurrentSection] = useState('Home');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };


  return (
    <div className='dashboard'>
        <Header />
        <Navbar  handleSectionChange={handleSectionChange} />

        <div className="content-wrapper">
          <div className="title">{currentSection}</div>
          <DashboardContent section={currentSection} />
        </div>
    </div>
  )
};

export default Dashboard;