import React from 'react';

import logo from '../../assets/logo.svg';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({ selected, isHome, hasNotification, mentions }) => {
  return (
    <Button isHome={isHome} hasNotification={hasNotification} mentions={mentions} className={selected ? 'active' : ''} >
      {isHome && <img src={logo} alt="logo" />}
    </Button>
  );
}

export default ServerButton;