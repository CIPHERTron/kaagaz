import styled from '@emotion/styled';
import Tilt from 'react-tilt';

export const ImageContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    gap: 10px;
    margin: auto;
  }

  @media (hover: none) {
    & > .tiler {
      transform: inherit !important;
    }
  }
`;

export const Tiler = styled(Tilt)``;
