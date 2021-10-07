import Image from 'next/image';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Heading = styled.h3`
  font-weight: 400;
  text-align: center;
  font-size: 36px;
  margin: 3% auto;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 854px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 532px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Button = styled.button`
  background-color: #fff;
  color: #999999;
  border: none;
  cursor: pointer;
  width: fit-content;
  margin: 5px auto;
  font-size: 24px;
  &:hover {
    text-decoration: underline;
    color: blue;
    font-weight: 600;
  }
`;

export const ProfileImage = styled(Image)`
  height: 180px;
  width: auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 14px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 898px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 654px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 554px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Tag = styled.p`
  color: #fff;
  background-color: #000;
  font-size: 14px;
  padding: 3px 7px;
  border-radius: 10px;
`;
