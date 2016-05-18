import React from 'react';
import {Grid} from 'react-bootstrap';

import Navigation from './navigation.jsx';

const Layout = ({content = () => null }) => (
    <div className="main-wrapper">
      <header>
        <Navigation />
      </header>

      <Grid>
        {content()}
      </Grid>
    </div>
);

export default Layout;
