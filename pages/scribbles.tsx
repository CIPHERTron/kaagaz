import React from 'react';
import { Layout, Container, LegacyCard } from '../components';
import { getContentList } from '../lib/content';
import { CenterElements, Heading } from '../styles/legacy.styles';
import { Tiler, ImageContainer, Description } from '../styles/scribbles.styles';
import { Body } from '../styles/Typography.styles';

const Scribbles = ({ articles }) => {
  return (
    <Layout
      pathname={'/scribbles'}
      pageTitle='Scribbles'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <Heading>Scribbles</Heading>
        <Description>
          Suffering from Writer’s block? Scribbling around in your book aimlessly with no words
          flowing?
          <br />
          We post regular writing prompts as fodder for your inspiration. Let your creativity flow
          and mail your works to us at{' '}
          <span>
            <a href='mailto:xpress.d361@gmail.com'>xpress.d361@gmail.com</a>
          </span>{' '}
          for a chance to be featured on Kaagaz!
        </Description>
        <ImageContainer>
          <Tiler className='tiler'>
            <img
              src='https://res.cloudinary.com/dzvmhmqr0/image/upload/v1637762593/scribbles/scribble-1_smxhxp.jpg'
              alt='scribble-1'
            />
          </Tiler>
          <Tiler className='tiler'>
            <img
              src='https://res.cloudinary.com/dzvmhmqr0/image/upload/v1637762595/scribbles/scribble-2_ltgozl.jpg'
              alt='scribble-2'
            />
          </Tiler>
          <Tiler className='tiler'>
            <img
              src='https://res.cloudinary.com/dzvmhmqr0/image/upload/v1637762594/scribbles/scribble-3_c8qnwc.jpg'
              alt='scribble-3'
            />
          </Tiler>
        </ImageContainer>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articles = getContentList('articles');
  return {
    props: { articles },
  };
};

export default Scribbles;
