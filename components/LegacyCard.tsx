import React from 'react';
import Link from 'next/link';
import { Wrapper, Container, Image, ArticleHeading, Quote, Anchor } from '../styles/legacy.styles';

function LegacyCard({ article }) {
  const { date, description, slug, title } = article;
  return (
    <Wrapper>
      <Container>
        <ArticleHeading>{title}</ArticleHeading>
        <Quote>{description}</Quote>
        <Link href={`/articles/${slug}`}>
          <Anchor rel='noreferrer noopener'>Read more...</Anchor>
        </Link>
      </Container>
      <Container>
        <Image src='/images/required/legacy.png' alt='Article Image' />
      </Container>
    </Wrapper>
  );
}

export default LegacyCard;
