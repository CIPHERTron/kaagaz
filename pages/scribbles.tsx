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
            <img src='/images/scribbles/scribble.jpg' alt='scribble' />
          </Tiler>
          <Tiler className='tiler'>
            <img src='/images/scribbles/scribble.jpg' alt='scribble' />
          </Tiler>
          <Tiler className='tiler'>
            <img src='/images/scribbles/scribble.jpg' alt='scribble' />
          </Tiler>
          <Tiler className='tiler'>
            <img src='/images/scribbles/scribble.jpg' alt='scribble' />
          </Tiler>
          <Tiler className='tiler'>
            <img src='/images/scribbles/scribble.jpg' alt='scribble' />
          </Tiler>
          <Tiler className='tiler'>
            <img src='/images/scribbles/scribble.jpg' alt='scribble' />
          </Tiler>
          <Tiler className='tiler'>
            <img src='/images/scribbles/scribble.jpg' alt='scribble' />
          </Tiler>
          <Tiler className='tiler'>
            <img src='/images/scribbles/scribble.jpg' alt='scribble' />
          </Tiler>
          <Tiler className='tiler'>
            <img src='/images/scribbles/scribble.jpg' alt='scribble' />
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
