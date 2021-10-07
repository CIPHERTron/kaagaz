import React from 'react';
import { Wrapper, RecentArticle, ArticleImage } from '../styles/recent.styles';

function RecentArticles() {
  return (
    <Wrapper>
      <RecentArticle>
        <ArticleImage src='/images/required/article1.jpg' />
      </RecentArticle>
      <RecentArticle>
        <ArticleImage src='/images/required/article1.jpg' />
      </RecentArticle>
      <RecentArticle>
        <ArticleImage src='/images/required/article1.jpg' />
      </RecentArticle>
      <RecentArticle>
        <ArticleImage src='/images/required/article1.jpg' />
      </RecentArticle>
    </Wrapper>
  );
}

export default RecentArticles;
