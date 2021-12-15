import React from 'react';
import Link from 'next/link';
import { Linkedin, GitHub } from 'react-feather';
import { Container, Profile, DevName, LinkWrapper } from '../styles/dev.styles';

function DevProfile({ image, alt, name, linkedin, github }) {
  return (
    <Container>
      <Profile src={image} alt={alt} />
      <DevName>{name}</DevName>
      <LinkWrapper>
        <Link href={linkedin}>
          <a target='_blank' rel='noreferrer noopener' className='icon-link'>
            <Linkedin />
          </a>
        </Link>
        <Link href={github}>
          <a target='_blank' rel='noreferrer noopener' className='icon-link'>
            <GitHub />
          </a>
        </Link>
      </LinkWrapper>
    </Container>
  );
}

export default DevProfile;
