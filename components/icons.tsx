import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Mail, Facebook } from 'react-feather';
import { Wrapper } from '../styles/icons.styles';

export const Icons = () => {
  return (
    <Wrapper>
      <Link href='https://m.facebook.com/shout.d361/'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Facebook />
        </a>
      </Link>
      <Link href='https://instagram.com/d361official/'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Instagram />
        </a>
      </Link>
    </Wrapper>
  );
};
