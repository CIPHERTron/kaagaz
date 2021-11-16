import React, { FC } from 'react';

import { Layout, Container, RecentArticles, EditorDesk } from '../components';
import { OffWhiteContainer } from '../styles/container.styles';
import { Heading } from '../styles/globals.styles';
// import { getContentList } from '../lib/content';

//@ts-ignore
const Index: FC = ({ selectedWorks, selectedArticles }) => {
  return (
    <Layout pathname={'/'} pageTitle='Homepage'>
      <OffWhiteContainer>
        <Container>
          <Heading>Recent Articles</Heading>
          <RecentArticles />
        </Container>
      </OffWhiteContainer>
      <Container>
        <Heading>Editor's Desk</Heading>
        <EditorDesk />
      </Container>
    </Layout>
  );
};

// export const getStaticProps = async () => {
//   const works = await getContentList('work');
//   const selectedWorks = works.filter((work) => work.selectedWork);
//   const articles = getContentList('articles');
//   const selectedArticles = articles.filter((article) => article.category === 'selected');

//   return {
//     props: {
//       selectedWorks,
//       selectedArticles,
//     },
//   };
// };

export default Index;
