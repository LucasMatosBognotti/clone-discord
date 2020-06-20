import React from 'react';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfro from '../ChannelInfo';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfro />
    </Grid>
  );
}

export default Layout;