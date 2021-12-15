import React from 'react';
import { Layout, Container, DevProfile } from '../components';
import { DevInfoDesc, ProfileGrid, OpencodeLogo } from '../styles/dev.styles';
import { Heading } from '../styles/legacy.styles';

import { infoObj } from '../config/devInfo';

const arr = infoObj.developers;

const DevelopersInfo = () => {
  return (
    <Layout pathname={'/developerInfo'} pageTitle='Developers Info' pageDescription=''>
      <Container>
        <Heading>ABOUT</Heading>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <OpencodeLogo src={infoObj.logo} alt='Opencode Logo' />
        </div>
        <DevInfoDesc>
          This website is built and maintained by{' '}
          <a href='https://opencodenitr.herokuapp.com'>OpenCode NITR</a>. OpenCode is the official
          open-source community of NIT Rourkela. We at OpenCode are ardently interested in building
          solutions for the world and contributing to the world of open source. Interested to know
          more about us? Do visit our GitHub organization{' '}
          <a href='https://github.com/opencodenitr' rel='noreferrer noopener'>
            @opencodenitr
          </a>{' '}
          where you can find all our open-sourced projects. Also you can find us on Instagram at{' '}
          <a href='https://www.instagram.com/opencode.nitr/' rel='noreferrer noopener'>
            @opencode.nitr
          </a>{' '}
          where we post regular updates about our events and workshops.
        </DevInfoDesc>

        <Heading>DEVELOPERS</Heading>
        <ProfileGrid>
          {arr.map(({ image, alt, name, linkedin, github }) => (
            <DevProfile
              key={name}
              image={image}
              alt={alt}
              name={name}
              linkedin={linkedin}
              github={github}
            />
          ))}
        </ProfileGrid>
      </Container>
    </Layout>
  );
};

export default DevelopersInfo;
