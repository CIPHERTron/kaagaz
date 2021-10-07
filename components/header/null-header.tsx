import React, { HTMLAttributes } from 'react';

import { Container } from '../container';
import { StyledPageHeading } from '../../styles/header.styles';

interface IPageHeader extends HTMLAttributes<HTMLHeadingElement> {
  headingTitle: string;
}

const NullHeader = ({ headingTitle }: IPageHeader) => (
  <StyledPageHeading className='page'>
    <Container>
      <div className='header-container'>
        <i></i>
      </div>
    </Container>
  </StyledPageHeading>
);

export default NullHeader;
