import styled from '@emotion/styled';

export const OpencodeLogo = styled.img`
  width: 400px;
  height: auto;
  padding: 5px;
  border: 3px solid #000;
  border-style: dotted;
  margin: 14px auto;
`;

export const DevInfoDesc = styled.p`
  text-align: left;
  color: #999999;

  @media (max-width: 554px) {
    text-align: justify;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  width: 250px;
  border: 5px solid #999999;
  border-style: dotted;
  padding: 2px;
  margin: 0 auto;
`;

export const Profile = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;

export const DevName = styled.h4`
  text-align: center;
  margin: 7px auto;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;

  a:first-child {
    margin-right: 10px;
  }

  a {
    &:hover {
      color: #999999;
    }
  }
`;

export const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 50px;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 844px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 544px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
