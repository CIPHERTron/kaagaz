import React from 'react';
import { Layout, Container, LegacyCard } from '../components';
import { getContentList } from '../lib/content';
import { CenterElements, Heading, SubHeading } from '../styles/legacy.styles';
import { Tiler, ImageContainer } from '../styles/scribbles.styles';

const Scribbles = ({ articles }) => {
  return (
    <Layout
      pathname={'/scribbles'}
      pageTitle='Scribbles'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <CenterElements>
          <Heading>Scribbles</Heading>
          <SubHeading>
          
            Suffering from Writer’s block? Scribbling around in your book aimlessly with no words flowing?<br/> 
            We post regular writing prompts as fodder for your inspiration. 
            Let your creativity flow and mail your works to us at <u>xpress.d361@gmail.com </u>
            for a chance to be featured on Kaagaz!
          </SubHeading>
        </CenterElements>
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
