import React from 'react';
import { Layout, Container, LegacyCard } from '../components';
import { getContentList } from '../lib/content';
import { CenterElements, Heading } from '../styles/legacy.styles';

const Scribbles = ({ articles }) => {
  return (
    <Layout
      pathname={'/scribbles'}
      pageTitle='Scribbles'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <Heading>Scribbles</Heading>
        <p>Scribbles page will be a static page</p>
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
