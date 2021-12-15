import Image from 'next/image';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-basis: 20%;
  @media (max-width: 1024px) {
    flex-basis: 25%;
  }
  @media (max-width: 898px) {
    flex-basis: 33.33%;
  }
  @media (max-width: 654px) {
    flex-basis: 50%;
  }
  @media (max-width: 554px) {
    flex-basis: 100%;
  }
`;

export const Heading = styled.h3`
  font-weight: 400;
  text-align: center;
  font-size: 36px;
  margin: 3% auto;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 8px;
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

export const ProfileName = styled.h4`
  margin: 10px 0;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-flow: row wrap;
`;

export const Tag = styled.p`
  color: #fff;
  background-color: #000;
  font-size: 14px;
  padding: 3px 7px;
  border-radius: 10px;
`;
