import React from 'react';
import { Layout, Container, LegacyCard } from '../components';
import { getContentList } from '../lib/content';
import { CenterElements, Heading } from '../styles/legacy.styles';
import { Tiler, ImageContainer } from '../styles/scribbles.styles';

const Scribbles = ({ articles }) => {
  return (
    <Layout
      pathname={'/scribbles'}
      pageTitle='Scribbles'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <Heading>Scribbles</Heading>
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
