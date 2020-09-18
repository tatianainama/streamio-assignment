import React from 'react';

import Link from 'components/Link';
import Card from 'components/Card';
import Chip from 'components/Chip';
import TopAppBar from 'components/TopAppBar';
import Banner from 'components/Banner';
import HospitalMasonry from 'components/HospitalMasonry';

import sampleImg from './sample.png';
import bannerImg from './banner.png';
import graph1 from './graph1.png';
import graph2 from './graph2.png';

import './normalize.css';
import './App.css';

function App() {
  const drawerLinks = [
    { label: 'dashboard', href: '#' },
    { label: 'dr. profiles', href: '#' },
    { label: 'organization', href: '#' },
    { label: 'department', href: '#' },
    { label: 'settings', href: '#' }
  ];

  const hospitalStats = [
    { icon: 'icon', label: 'corona cases', value: '289.2k', link: '#' },
    { icon: 'icon', label: 'active cases', value: '96.3k', link: '#', graph: graph1 },
    { icon: 'icon', label: 'deaths', value: '23.6k', link: '#', color: 'accent' },
    { icon: 'icon', label: 'beds available', value: '2.8k', link: '#', graph: graph2 },
    { icon: 'icon', label: 'recovered', value: '98.7k', link: '#', color: 'primary'},
    { icon: 'icon', label: 'testing done', value: '321.4k', link: '#' },
  ];

  return (
    <div className="dashboard">
      <aside className="drawer">
        <div>
          icon
        </div>

        <nav className="nav-links">
          {
            drawerLinks.map((link, key) => (
              <Link key={key} href={link.href}>{link.label}</Link>
            ))
          }
        </nav>
        <div>
          <Card
            align="center"
          >
            <Chip>New</Chip>
            <h3>Northwester Mem-Hospital</h3>
            <img src={sampleImg} alt="news"></img>
          </Card>
        </div>
      </aside>
      <div className="main">
        <div className="menu">
          <TopAppBar></TopAppBar>
        </div>
        <div className="main-content">
          <div className="main-content__container">
            <section>
              <h2>Analytics Overview</h2>
              <Banner
                title="Northwestern Memorial Hospital"
                subTitle="251 E Huron St, Chicago, IL 60611, United States"
                img={bannerImg}
                support={(<div>total doctors</div>)}
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
