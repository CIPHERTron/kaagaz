import React from 'react';
import { ArticleHeading, ArticleImage, RecentArticle } from '../styles/recent.styles';

const RecentArticleCard = () => {
  return (
    <RecentArticle>
      <ArticleImage src='/images/required/article1.jpg' />
      <ArticleHeading>
        <a href=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quae. Lorem ipsum dolor
          Lorem ipsum dolor
        </a>
      </ArticleHeading>
    </RecentArticle>
  );
};

export default RecentArticleCard;
