import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EditorComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  column-gap: 30px;
  width: 100%;
  height: fit-content;
  border-radius: 34px;
  background-color: #faf9f9;
  padding: 10px;
  margin-bottom: 15px;

  @media (max-width: 1418px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 34px;
  margin: 10px;
  margin-bottom: 5px;
`;

export const Heading = styled.h2`
  font-size: 60px;
  font-weight: 500;
  margin-bottom: 15px;

  @media (max-width: 1418px) {
    font-size: 40px;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

export const Name = styled.h3`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const Description = styled.p`
  font-weight: 400;
  line-height: 34.5px;
  text-align: justify;
  font-size: 23px;
  width: 1000px;

  @media (max-width: 1418px) {
    width: fit-content;
  }
`;

export const NamesContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  .first {
    margin-right: 50px;
  }
`;
