import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Canal aberto para conversas</Title>

      <Separator />

      <Description></Description>
    </Container>
  );
}

export default ChannelInfo;