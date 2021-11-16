import React from 'react';
import Typist from 'react-typist';

import { Container } from '../.';
import {
  StyledHomeHeading,
  LandingContainer,
  LandingHeading,
  DesktopIllustration,
  MobileIllustration,
  LandingImage,
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
          <LandingImage href='/legacy'>
            <DesktopIllustration src='/images/required/desktop-landing.png' />
            <MobileIllustration src='/images/required/mobile-landing-2.png' />
          </LandingImage>
        </LandingContainer>
      </Container>
    </StyledHomeHeading>
  );
};

export default HomeHeader;
