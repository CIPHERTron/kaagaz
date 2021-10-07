import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #f0f0f0;
  height: 545px;
  width: 1080px;
  align-items: center;
  margin: 3% auto;
  border-radius: 5px;
  box-shadow: 4px 4px 10px 0px #00000040;

  @media (max-width: 1181px) {
    grid-template-columns: 1fr;
    height: fit-content;
    width: fit-content;
  }
`;

export const Heading = styled.h1`
  font-size: 144px;
  text-align: right;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-style: normal;

  @media (max-width: 769px) {
    font-size: 84px;
  }
`;

export const ArticleHeading = styled.h3`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  text-align: center;
  margin: 0 auto 5%;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
    color: var(--text-color-bright);
  }
`;

export const Quote = styled.p`
  width: 387px;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CenterElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  object-fit: cover;
  margin: 0;

  @media (max-width: 1181px) {
    height: 100%;
    width: auto;
  }
`;
