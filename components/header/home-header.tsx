import React from 'react';
import Typist from 'react-typist';

import { Container } from '../.';
import {
  StyledHomeHeading,
  LandingContainer,
  Illustration,
  LandingHeading,
} from '../../styles/header.styles';

const HomeHeader = () => {
  return (
    <StyledHomeHeading>
      <Container>
        <LandingContainer>
          <LandingHeading>
            <Typist cursor={{ show: true, hideWhenDone: true, blink: true }}>
              Imagine. Create. Soar
            </Typist>
          </LandingHeading>
          <Illustration src='/images/required/landing.svg' />
        </LandingContainer>
      </Container>
    </StyledHomeHeading>
  );
};

export default HomeHeader;
