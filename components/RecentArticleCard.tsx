import React from 'react';
import { ArticleHeading, ArticleImage, RecentArticle } from '../styles/recent.styles';

const RecentArticleCard = () => {
  return (
    <RecentArticle>
      <ArticleImage src='/images/required/article1.jpg' />
      <ArticleHeading>
        <a href=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
      </ArticleHeading>
    </RecentArticle>
  );
};

export default RecentArticleCard;
