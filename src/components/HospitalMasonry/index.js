import React from 'react';

import Card from 'components/Card';
import IconButton from 'components/IconButton';
import Icon from 'components/Icon';

import './styles.css';

const HospitalMasonry = ({
  hospitalStats
}) => {

  return (
    <div className="hospital-stats">
      {
        hospitalStats.map((stat, key) => (
          <div key={key} className={`stat ${stat.graph ? 'stat--large' : ''}`}>
            <Card key={key}
              bordered={!stat.color}
              color={stat.color}
            >
              <h3>
                <Icon
                  custom={stat.icon}
                  size='large'
                /> <br/>
                {stat.value}
              </h3>
              <div className="stat__desc">
                <p>{ stat.label }</p>
                <IconButton icon="north_east" />
              </div>
              {
                stat.graph ? (
                  <div className="stat__graph">
                    <img src={stat.graph} alt=""/>
                  </div>
                ) : null
              }
            </Card>
          </div>
        ))
      }
    </div>
  )
}

export default HospitalMasonry;