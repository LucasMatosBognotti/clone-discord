import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>

        {Array.from(Array(30).keys()).map((n) => (
          <ChannelMessage key={n} author="ETminhacasa" date="20/07/2020" content="Arroz com feijão" />
        ))}

        <ChannelMessage 
          author="Maria"
          date="20/07/2020"
          hasMention
          isBot
          content={
            <>
              <Mention>@ETminhacasa</Mention>, me carrega no LoL e CS de novo por favor ?
            </>
          }
        /> 
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;