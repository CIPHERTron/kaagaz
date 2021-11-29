import React, { useState, useEffect } from 'react';
import { StyledFooterSection, Container, BackToTop } from '../styles/footer.styles';
import { Icons } from '.';
import { StyledLogo } from '../styles/nav.styles';
import { Link, animateScroll as scroll } from 'react-scroll';
import { ClassNames } from '@emotion/core';

  

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
 

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      console.log('it works');
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800 });
  };

  return (
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
          <h6>
            Jasmin: <strong>+91 82491 24343</strong>
          </h6>
          <h6>
            Leo: <strong>+91 96061 84527</strong>
          </h6>
        </Container>
        <p className='about-site'>
          Built with 💙 by{' '}
          <a href='https://opencodenitr.herokuapp.com/' target='_blank' rel='noreferrer noopener'>
            OpenCode NITR
          </a>{' '}
          & <a href='https://dscnitrourkela.org/'>GDSC NIT Rourkela</a>
        </p>
      </Container>
      <BackToTop onClick={scrollToTop} title='Go to top' className={isVisible ? '' : 'not-visible'}>
        <img src='https://img.icons8.com/material-outlined/24/000000/collapse-arrow.png' />
      </BackToTop>
    </StyledFooterSection>
  );
};

export default Footer;
