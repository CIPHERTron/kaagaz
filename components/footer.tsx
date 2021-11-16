import React from 'react';
import { StyledFooterSection, Container } from '../styles/footer.styles';
import { Icons } from '.';
import { StyledLogo } from '../styles/nav.styles';

const Footer = () => (
  <StyledFooterSection>
    <Container className='footer-box'>
      <Container className='footer-container'>
        <StyledLogo src='https://raw.githubusercontent.com/CIPHERTron/kaagaz/main/public/logo.png' />
        <p className='description'>
          Kaagaz is a D361 initiative, the official magazine club of NIT-Rourkela which aims to
          provide a creative environment for all the writers, artists, and designers in the
          institute through various social media series, and the annual student magazine.
        </p>
      </Container>

      <Container className='footer-links'>
        <p>Quick Links</p>
        <a href='/comics'>Comics</a>
        <a href='/scribbles'>Scribbles</a>
        <a href='/team'>Our Team</a>
        <a href='/about'>About Us</a>
      </Container>

      <Container className='footer-social'>
        <p>Social Links</p>
        <Icons />
      </Container>
      <p className='about-site'>
        Built with 💙 by{' '}
        <a href='https://github.com/opencodenitr/' target='_blank' rel='noreferrer noopener'>
          OpenCode & GDSC NIT Rourkela
        </a>
      </p>
    </Container>
  </StyledFooterSection>
);

export default Footer;
