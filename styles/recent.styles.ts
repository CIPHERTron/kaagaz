import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 15%;

  @media (max-width: 1320px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 984px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 655px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RecentArticle = styled.div`
  width: 298px;
  height: 298px;
  border-radius: 34px;
  margin: 7% auto;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export const ArticleImage = styled.img`
  object-fit: cover;
  border-radius: 34px;
  cursor: pointer;
  transition: all var(--animation-duration) var(--transition-timing-function);

  &:hover {
    transform: scale(1.1);
  }
`;
