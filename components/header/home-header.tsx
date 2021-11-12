import React from 'react';
import Typist from 'react-typist';

import { Container } from '../.';
import {
  StyledHomeHeading,
  LandingContainer,
  LandingHeading,
  DesktopIllustration,
  MobileIllustration,
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
          <a href='/legacy'>
            <DesktopIllustration src='/images/required/desktop-landing.png' />
            <MobileIllustration src='/images/required/mobile-landing.png' />
          </a>
        </LandingContainer>
      </Container>
    </StyledHomeHeading>
  );
};

export default HomeHeader;
