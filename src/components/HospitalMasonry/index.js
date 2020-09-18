import React from 'react';

import Card from 'components/Card';

import './styles.css';

const HospitalMasonry = ({
  hospitalStats
}) => {

  return (
    <div className="hospital-stats">
      {
        hospitalStats.map((stat, key) => (
          <div key={key} className={`item ${stat.graph ? 'large' : ''}`}>
            <Card key={key}
              title={stat.value}
              bordered={!stat.color}
              color={stat.color}
            >
              { stat.label }
              { stat.graph }
            </Card>
          </div>
        ))
      }
    </div>
  )
}

export default HospitalMasonry;