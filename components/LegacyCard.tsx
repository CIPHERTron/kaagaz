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
  const { description, slug, title, content, design, category, previewImage } = article;
  return (
    <Wrapper>
      <Container>
        <Image src={previewImage} alt={title} />
      </Container>
      <Container>
        <ArticleHeading>{title}</ArticleHeading>
        <Quote>{description}</Quote>
        <Credits>
          {content && <Attribute>Content: {content}</Attribute>}
          {design && <Attribute>Design: {design}</Attribute>}
        </Credits>
        <Link href={`/articles/${slug}`}>
          <Anchor rel='noreferrer noopener'>Read more...</Anchor>
        </Link>
      </Container>
    </Wrapper>
  );
}

export default LegacyCard;
