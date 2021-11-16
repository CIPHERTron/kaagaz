import styled from '@emotion/styled';

export const StyledHomeHeading = styled.div`
  height: fit-content;
  padding: 32px;
  padding-top: 0px;

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
  @media (max-width: 769px) {
    padding: 0px;
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
  font-weight: 800;
  margin-bottom: 10px;

  @media (max-width: 769px) {
    font-size: 32px;
  }
  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

export const LandingAbout = styled.h1`
  font-size: 64px;
  @media (max-width: 769px) {
    font-size: 32px;
  }
`;

export const LandingImage = styled.a`
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const DesktopIllustration = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 512px) {
    display: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const MobileIllustration = styled.img`
  width: 100%;
  height: auto;
  display: none;

  @media (max-width: 512px) {
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
