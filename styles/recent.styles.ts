import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 60px;
  justify-content: center;

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
  position: relative;
  overflow: hidden;
  background-color: #faf9f9;

  &:hover {
    & > img {
      transform: translatey(-60px);
      cursor: default;
      transition: transform 1s;
    }
    & > h3 {
      transform: translatey(-60px);
      transition: all 1s;
    }
  }
`;

export const ArticleImage = styled.img`
  object-fit: cover;
  cursor: pointer !important;
  transition: all var(--animation-duration) var(--transition-timing-function);
`;

export const ArticleHeading = styled.h3`
  padding: 10px 20px;
  background-color: #faf9f9;
  border-radius: 0 0 34px 34px;
  height: 60px;
  font-size: 24px;
  line-height: 18px;
  text-align: center;
  & > a {
    text-decoration: none;
    color: #493434;
    &:hover {
      color: var(--text-color-bright);
    }
  }
`;
