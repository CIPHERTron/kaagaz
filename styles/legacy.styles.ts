import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #f0f0f0;
  height: auto;
  width: 1080px;
  align-items: center;
  margin: 3% auto;
  border-radius: 5px;
  box-shadow: 4px 4px 10px 0px #00000040;
  overflow: hidden;

  @media (max-width: 1181px) {
    grid-template-columns: 1fr;
    height: fit-content;
    width: fit-content;
  }
`;

export const Heading = styled.h1`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
`;

export const ArticleHeading = styled.h3`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  text-align: center;
  margin: 5px auto 10px;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
    color: var(--text-color-bright);
  }
`;

export const Quote = styled.p`
  width: 90%;
  max-width: 387px;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin: 5px 0;
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
  height: 400px;
  width: 600px;
  object-fit: cover;
  margin: 0;
  cursor: pointer;

  @media (max-width: 450px) {
    height: 250px;
  }
`;
export const Credits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Attribute = styled.p`
  font-weight: 700;
  color: #493433;
  margin: 0;
  padding: 0;
  margin: 5px auto;
`;

export const MobileBook = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
