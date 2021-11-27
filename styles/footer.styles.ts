import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { GitHub, Codepen, Twitter, Linkedin } from 'react-feather';
import { OutlinedButton } from './buttons.styles';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;

  .description {
    font-size: medium;
  }

  @media (max-width: 769px) {
    padding: 0 10px;
  }
`;

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
    width: 100%;

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

    & > p {
      font-size: x-large;
      font-weight: bold;
      margin-bottom: 10px;
    }

    & > a {
      text-decoration: none;

      &:hover {
        color: #a0a0a0;
      }
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
      margin-bottom: 15px;
      align-items: flex-start;

      & > div {
        margin-left: 0;
      }
    }

    .footer-links {
      align-items: flex-start;
      margin-bottom: 15px;
    }
  }
`;

export const BackToTop = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10.5px 20px;
  background-color: white;
  border: none;
  border-radius: 50px;
  -webkit-box-shadow: 0px 4px 12px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 4px 12px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 12px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 9999;

  &:hover {
    background-color: #f3f3f3;
  }

  & > span {
    display: flex;
  }
`;
