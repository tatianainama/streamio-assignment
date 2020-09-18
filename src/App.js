import React from 'react';

import TopAppBar from 'components/TopAppBar';
import Banner from 'components/Banner';
import HospitalMasonry from 'components/HospitalMasonry';
import Badge from 'components/Badge';
import Drawer from 'components/Drawer';

import bannerImg from './banner.png';
import graph1 from './graph1.png';
import graph2 from './graph2.png';

import './normalize.css';
import './App.css';

function App() {
  const drawerLinks = [
    { icon: 'dashboard', label: 'dashboard', href: '#' },
    { icon: 'hospital-sign', label: 'dr. profiles', href: '#' },
    { icon: 'secure-shield', label: 'organization', href: '#' },
    { icon: 'shield', label: 'department', href: '#' },
    { icon: 'apple', label: 'settings', href: '#' }
  ];

  const hospitalStats = [
    { icon: 'registered', label: 'corona cases', value: '289.2k', link: '#' },
    { icon: 'transfusion', label: 'active cases', value: '96.3k', link: '#', graph: graph1 },
    { icon: 'heartbeat', label: 'deaths', value: '23.6k', link: '#', color: 'accent' },
    { icon: 'hospital-bed', label: 'beds available', value: '2.8k', link: '#', graph: graph2 },
    { icon: 'doctor', label: 'recovered', value: '98.7k', link: '#', color: 'primary'},
    { icon: 'volunteer', label: 'testing done', value: '321.4k', link: '#' },
  ];

  const bannerData = {
    title: 'Northwestern Memorial Hospital',
    subtitle: '251 E Huron St, Chicago, IL 60611, United States',
    img: bannerImg,
    badges: [
      { icon: 'person', primary: '3.8k', secondary: 'Total doctors'},
      { icon: 'location_city', primary: '21', secondary: 'Number of cities'}
    ]
  };

  return (
    <div className="dashboard">
      <Drawer drawerLinks={drawerLinks}/>
      <div className="main">
        <div className="menu">
          <TopAppBar></TopAppBar>
        </div>
        <div className="main-content">
          <div className="main-content__container">
            <section>
              <h2>Analytics Overview</h2>
              <Banner
                title={bannerData.title}
                subTitle={bannerData.subtitle}
                img={bannerData.img}
                support={bannerData.badges.map((badge, key) => (
                    <Badge {...badge} key={key}/>
                  ))
                }
              ></Banner>
            </section>
            <section>
              <h2>Hospital Stats</h2> 
              <HospitalMasonry hospitalStats={hospitalStats} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
