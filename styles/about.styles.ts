import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  text-align: justify;
  font-size: 32px;

  @media (max-width: 749px) {
    font-size: 24px;
    text-align: left;
  }
`;

export const LeftImage = styled.img`
  height: 100%;
  width: auto;
  margin-bottom: 2%;

  @media (max-width: 749px) {
    height: 100px;
    width: auto;
    margin-bottom: 5%;
  }
`;
