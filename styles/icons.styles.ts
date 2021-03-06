import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
  margin: 2% auto;

  .icon-link {
    color: #000;
    text-decoration: none;
    margin: auto 10px;

    &:hover {
      color: var(--text-color-bright);
    }

    @media (max-width: 300px) {
      justify-content: center;
      margin: 0 10px 0 0;
    }
  }
`;
