import styled from '@emotion/styled';
import { IContainer } from '../components/container';
import { getWidth } from '../util/getWidth';

export const StyledContainer = styled.section<IContainer>`
  padding: 0 4%;
  max-width: ${({ width }) => getWidth(width)};
  margin: 0 auto;
`;

export const OffWhiteContainer = styled.section<IContainer>`
  background-color: #f3f3f3;
  max-width: 100%;
  padding: 30px 0;
`;
