import React from 'react';

import Link from 'components/Link';
import Card from 'components/Card';
import Chip from 'components/Chip';
import { ReactComponent as Logo } from 'logo.svg';
import sampleImg from './sample.png';

import './styles.css';

const Drawer = ({
  drawerLinks
}) => {
  return (
    <aside className="drawer">
        <div className="drawer__logo">
          <Logo></Logo>
        </div>

        <nav className="nav-links">
          {
            drawerLinks.map((link, key) => (
              <Link key={key} href={link.href} icon={{custom: link.icon, size: 'xsmall'}}>
                {link.label}
              </Link>
            ))
          }
        </nav>
        <div>
          <Card
            align="center"
          >
            <div>
              <Chip>New</Chip>
            </div>
            <h3>Northwester Mem-Hospital</h3>
            <img src={sampleImg} alt="news"></img>
          </Card>
        </div>
      </aside>
  )
};

export default Drawer;