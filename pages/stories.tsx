import React from 'react';
import { Layout, Container, LegacyCard } from '../components';
import { getContentList } from '../lib/content';
import { CenterElements, Heading } from '../styles/legacy.styles';

const Stories = ({ articles }) => {
  return (
    <Layout
      pathname={'/stories'}
      pageTitle='Stories'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <Heading>Stories</Heading>
        <CenterElements>
          {articles.map((article, idx) => {
            if (article.category === 'stories') return <LegacyCard key={idx} article={article} />;
          })}
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

export default Stories;
