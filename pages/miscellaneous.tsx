import React from 'react';
import { Layout, Container, LegacyCard } from '../components';
import { getContentList } from '../lib/content';
import { CenterElements, Heading } from '../styles/legacy.styles';

const Miscellaneous = ({ articles }) => {
  return (
    <Layout
      pathname={'/miscellaneous'}
      pageTitle='Miscellaneous'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <Heading>Miscellaneous</Heading>
        <CenterElements>
          {articles.map((article, idx) => (
            <LegacyCard key={idx} article={article} />
          ))}
        </CenterElements>
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

export default Miscellaneous;
