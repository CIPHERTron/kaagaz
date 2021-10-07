import styled from '@emotion/styled';

export const StyledHomeHeading = styled.div`
  height: fit-content;
  padding: 64px;

  @media (min-width: 1024px) {
    .header-container {
      max-width: 70%;
    }
    .description {
      font-size: 1.2em;
    }
  }

  @media (min-width: 1336px) {
    .header-container {
      max-width: 80%;
    }
  }
`;

export const StyledPageHeading = styled.div`
  text-align: center;
  &.page h1 {
    max-width: 80%;
    text-align: center;
    margin: 0 auto 1rem;
  }
  .about-header {
    font-size: 1.75em;
    text-align: center;
    margin: 1.5em 0;
  }

  @media (max-width: 769px) {
    &.page h1 {
      font-size: 2.2em;
    }
  }
`;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LandingHeading = styled.h1`
  text-align: center;
  color: var(--text-color);
  font-size: 48px;
  font-weight: 500;

  @media (max-width: 769px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const LandingAbout = styled.h1`
  font-size: 64px;
  @media (max-width: 769px) {
    font-size: 32px;
  }
`;

export const Illustration = styled.img`
  width: 100%;
  height: auto;
`;
