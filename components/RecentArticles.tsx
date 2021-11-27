import React from 'react';
import { Wrapper } from '../styles/recent.styles';
import RecentArticleCard from './RecentArticleCard';

import { recentArticles } from '../config/index.json';

function RecentArticles() {
  return (
    <Wrapper>
      {recentArticles.map(({ image, link, alt, title }) => (
        <RecentArticleCard key={image} image={image} altText={alt} title={title} link={link} />
      ))}
    </Wrapper>
  );
}

export default RecentArticles;
