import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Mail } from 'react-feather';
import { Wrapper } from '../styles/icons.styles';

export const Icons = () => {
  return (
    <Wrapper>
      <Link href='https://linkedin.com/in/'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Linkedin />
        </a>
      </Link>
      <Link href='https://instagram.com/d361official/'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Instagram />
        </a>
      </Link>
      <Link href='https://twitter.com/'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Twitter />
        </a>
      </Link>
      <Link href='mailto:random@gmail.com'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Mail />
        </a>
      </Link>
    </Wrapper>
  );
};
