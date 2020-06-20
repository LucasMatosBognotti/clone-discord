import React from 'react';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfro from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfro />
      <ChannelList />
      <UserInfo />
      <UserList />
    </Grid>
  );
}

export default Layout;