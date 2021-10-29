import React from 'react';
import Link from 'next/link';
import {
  Wrapper,
  Container,
  Image,
  ArticleHeading,
  Quote,
  Anchor,
  Credits,
  Attribute,
} from '../styles/legacy.styles';

function LegacyCard({ article }) {
  const { description, slug, title, content, design, category } = article;
  return (
    <Wrapper>
      <Container>
        <ArticleHeading>{title}</ArticleHeading>
        <Quote>{description}</Quote>
        <Credits>
          <Attribute>Content: {content}</Attribute>
          <Attribute>Design: {design}</Attribute>
        </Credits>
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
