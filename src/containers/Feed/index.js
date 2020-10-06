import React from 'react';
import { FlatFeed } from 'react-activity-feed';

import 'react-activity-feed/dist/index.css';

const Feed = () => {
    return (
        <div style={{
            maxHeight: '70vh',
            overflowY: 'scroll',
            overflowX: 'hidden'
        }}>
            <FlatFeed notify/>
        </div>
    )
};

export default Feed;