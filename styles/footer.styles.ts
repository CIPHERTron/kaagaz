import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { GitHub, Codepen, Twitter, Linkedin } from 'react-feather';

export const StyledFooterSection = styled.footer`
  .footer-box {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    min-height: 10vh;
    background-color: #faf9f9;
    width: 100%;
  }

  .footer-container {
    grid-column: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;

    & > img {
      align-self: flex-start;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    & > p {
      margin-bottom: 10px;
    }
  }

  .footer-social {
    grid-column: 5/7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 2px solid lightgray;
    width: 100%;

    & > div {
      & .icon-link {
        margin-right: 53px;
      }

      & .icon-link:nth-child(4) {
        margin-right: 0;
      }
    }

    & > p {
      font-size: x-large;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }

  .about-site {
    grid-column: 1/7;
    text-align: center;
    margin-bottom: 0;
    width: 100%;
    font-size: 0.9em;
    margin-right: auto;
    margin-left: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 2px solid lightgrey;

    &:hover {
      color: #000;
    }
  }

  .footer-links {
    grid-column: 3/5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-left: 2px solid lightgray;

    & > p {
      font-size: x-large;
      font-weight: bold;
      margin-bottom: 10px;
    }

    & > a {
      text-decoration: none;
    }
  }

  @media (max-width: 769px) {
    .footer-box {
      display: block;
    }

    .footer-container {
      & > p {
        text-align: start;
      }
    }

    .footer-social {
      border: none;
      margin-bottom: 15px;
      align-items: flex-start;

      & > div {
        margin-left: 0;
      }
    }

    .footer-links {
      align-items: flex-start;
      border: none;
      margin-bottom: 15px;
    }
  }
`;
