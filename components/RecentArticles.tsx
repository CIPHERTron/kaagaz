import React from 'react';
import { Wrapper } from '../styles/recent.styles';
import RecentArticleCard from './RecentArticleCard';

function RecentArticles() {
  return (
    <Wrapper>
      <RecentArticleCard />
      <RecentArticleCard />
      <RecentArticleCard />
      <RecentArticleCard />
    </Wrapper>
  );
}

export default RecentArticles;
