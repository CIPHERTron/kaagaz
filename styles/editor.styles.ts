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
    grid-template-columns: 300px 3fr;
  }
  @media (max-width: 1218px) {
    grid-template-columns: 300px 3fr;
  }
  @media (max-width: 1023px) {
    grid-template-columns: 250px 3fr;
  }
  @media (max-width: 760px) {
    grid-template-columns: 200px 3fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  height: 250px;
  object-fit: fill;
  border-radius: 34px;
  margin: auto 10px;
  // max-height: 250px;

  @media (max-width: 576px) {
    max-height: 300px;
  }
`;

export const Heading = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 0px;

  @media (max-width: 1418px) {
    font-size: 26px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const Name = styled.h3`
  font-weight: 500;
  margin: 5px 0;

  @media (max-width: 1418px) {
    font-size: 20px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const Description = styled.div`
  font-weight: 400;
  text-align: justify;
  width: 1000px;

  @media (max-width: 1418px) {
    width: fit-content;
  }
`;

export const NamesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px 0;

  .first {
    margin-right: 50px;
  }
`;
