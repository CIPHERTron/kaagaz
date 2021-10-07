import React from 'react';
import { Wrapper, LeftImage, Text } from '../styles/about.styles';

import { aboutContent } from '../config/teams';

function about() {
  return (
    <>
      <Wrapper>
        <LeftImage src='/images/required/about.png' alt='About Illustration' />
        <Text>{aboutContent}</Text>
      </Wrapper>
    </>
  );
}

export default about;
