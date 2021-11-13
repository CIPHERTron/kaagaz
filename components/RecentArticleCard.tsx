import React from 'react';
import Link from 'next/link';
import { ArticleHeading, ArticleImage, RecentArticle } from '../styles/recent.styles';

const RecentArticleCard = ({ image, altText, title, link }) => {
  return (
    <RecentArticle>
      <ArticleImage src={image} alt={altText} />
      <ArticleHeading>
        <Link href={link}>{title}</Link>
      </ArticleHeading>
    </RecentArticle>
  );
};

export default RecentArticleCard;
