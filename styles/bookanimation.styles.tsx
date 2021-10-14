import styled from '@emotion/styled';

export const BookComponent = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
  }

  .btn {
    display: inline-block;
    text-transform: uppercase;
    border: 2px solid #2c3e50;
    margin-top: 100px;
    font-size: 0.7em;
    font-weight: 700;
    padding: 0.1em 0.4em;
    text-align: center;
    -webkit-transition: color 0.3s, border-color 0.3s;
    -moz-transition: color 0.3s, border-color 0.3s;
    transition: color 0.3s, border-color 0.3s;

    &:hover {
      border-color: #16a085;
      color: #16a085;
    }
  }

  .align {
    clear: both;
    margin: 90px auto 20px;
    width: 100%;
    max-width: 1170px;
    text-align: center;

    & > li {
      width: 500px;
      min-height: 300px;
      display: inline-block;
      margin: 30px 20px 30px 30px;
      padding: 0 0 0 60px;
      vertical-align: top;
    }
  }

  .book {
    position: relative;
    width: 160px;
    height: 220px;
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .hardcover_front {
    -webkit-transform: rotateY(-34deg) translateZ(8px);
    -moz-transform: rotateY(-34deg) translateZ(8px);
    transform: rotateY(-34deg) translateZ(8px);
    z-index: 100;
    -webkit-transition: all 0.8s ease, z-index 0.6s;
    -moz-transition: all 0.8s ease, z-index 0.6s;
    transition: all 0.8s ease, z-index 0.6s;

    & li:first-child {
      background-color: #eee;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      backface-visibility: hidden;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      -webkit-transform: translateZ(2px);
      -moz-transform: translateZ(2px);
      transform: translateZ(2px);
    }

    & li:last-child {
      background: #fffbec;
      -webkit-transform: rotateY(180deg) translateZ(2px);
      -moz-transform: rotateY(180deg) translateZ(2px);
      transform: rotateY(180deg) translateZ(2px);
    }

    & li:first-child:after {
      width: 4px;
      height: 100%;
      -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
      -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
      transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    }

    & li:first-child:before {
      width: 4px;
      height: 100%;
      -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);
      -moz-transform: rotateY(90deg) translateZ(158px) translateX(2px);
      transform: rotateY(90deg) translateZ(158px) translateX(2px);
    }

    & li:last-child:after {
      width: 4px;
      height: 160px;
      -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px)
        translateY(-78px);
      -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px)
        translateY(-78px);
      transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);
    }

    & li:last-child:before {
      width: 4px;
      height: 160px;
      box-shadow: 0px 0px 30px 5px #333;
      -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px)
        translateY(-78px);
      -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px)
        translateY(-78px);
      transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);
    }
  }

  .hardcover_back {
    -webkit-transform: rotateY(-15deg) translateZ(-8px);
    -moz-transform: rotateY(-15deg) translateZ(-8px);
    transform: rotateY(-15deg) translateZ(-8px);

    & li:first-child {
      background: #fffbec;
      -webkit-transform: translateZ(2px);
      -moz-transform: translateZ(2px);
      transform: translateZ(2px);
    }

    & li:last-child {
      background: #fffbec;
      -webkit-transform: translateZ(-2px);
      -moz-transform: translateZ(-2px);
      transform: translateZ(-2px);
    }

    & li:first-child:after {
      width: 4px;
      height: 100%;
      -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
      -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
      transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    }

    & li:first-child:before {
      width: 4px;
      height: 100%;
      -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);
      -moz-transform: rotateY(90deg) translateZ(158px) translateX(2px);
      transform: rotateY(90deg) translateZ(158px) translateX(2px);
    }

    & li:last-child:after {
      width: 4px;
      height: 160px;
      -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px)
        translateY(-78px);
      -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px)
        translateY(-78px);
      transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);
    }

    & li:last-child:before {
      width: 4px;
      height: 160px;
      box-shadow: 10px -1px 80px 20px #666;
      -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px)
        translateY(-78px);
      -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px)
        translateY(-78px);
      transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);
    }
  }

  .book_spine {
    & li:first-child {
      background: #eee;
      -webkit-transform: translateZ(2px);
      -moz-transform: translateZ(2px);
      transform: translateZ(2px);
    }

    & li:last-child {
      background: #333;
      -webkit-transform: translateZ(-2px);
      -moz-transform: translateZ(-2px);
      transform: translateZ(-2px);
    }

    & li:first-child:after {
      width: 4px;
      height: 100%;
      -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
      -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
      transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    }

    & li:first-child:before {
      width: 4px;
      height: 100%;
      -webkit-transform: rotateY(-90deg) translateZ(-12px);
      -moz-transform: rotateY(-90deg) translateZ(-12px);
      transform: rotateY(-90deg) translateZ(-12px);
    }

    & li:last-child:after {
      width: 4px;
      height: 16px;
      -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px)
        translateY(-6px);
      -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);
      transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);
    }

    & li:last-child:before {
      width: 4px;
      height: 16px;
      box-shadow: 5px -1px 100px 40px rgba(0, 0, 0, 0.2);
      -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px)
        translateY(-6px);
      -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px)
        translateY(-6px);
      transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);
    }
  }

  .hardcover_front li:first-child:after,
  .hardcover_front li:first-child:before,
  .hardcover_front li:last-child:after,
  .hardcover_front li:last-child:before,
  .hardcover_back li:first-child:after,
  .hardcover_back li:first-child:before,
  .hardcover_back li:last-child:after,
  .hardcover_back li:last-child:before,
  .book_spine li:first-child:after,
  .book_spine li:first-child:before,
  .book_spine li:last-child:after,
  .book_spine li:last-child:before {
    background: #999;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    width: 100%;
    height: 98%;
    top: 1%;
    left: 3%;
    z-index: 10;

    & > li {
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      transform-style: preserve-3d;
      background: -webkit-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
      background: -moz-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
      background: -ms-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
      background: linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
      box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1),
        inset -1px 0px 1px rgba(150, 150, 150, 0.2);
      border-radius: 0px 5px 5px 0px;
      width: 100%;
      height: 100%;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      transform-origin: left center;
      -webkit-transition-property: transform;
      -moz-transition-property: transform;
      transition-property: transform;
      -webkit-transition-timing-function: ease;
      -moz-transition-timing-function: ease;
      transition-timing-function: ease;
    }

    & li:nth-child(1) {
      -webkit-transform: rotateY(-28deg);
      -moz-transform: rotateY(-28deg);
      transform: rotateY(-28deg);
      -webkit-transition-duration: 0.6s;
      -moz-transition-duration: 0.6s;
      transition-duration: 0.6s;
    }

    & li:nth-child(2) {
      -webkit-transform: rotateY(-30deg);
      -moz-transform: rotateY(-30deg);
      transform: rotateY(-30deg);
      -webkit-transition-duration: 0.6s;
      -moz-transition-duration: 0.6s;
      transition-duration: 0.6s;
    }

    & li:nth-child(3) {
      -webkit-transform: rotateY(-32deg);
      -moz-transform: rotateY(-32deg);
      transform: rotateY(-32deg);
      -webkit-transition-duration: 0.4s;
      -moz-transition-duration: 0.4s;
      transition-duration: 0.4s;
    }

    & li:nth-child(4) {
      -webkit-transform: rotateY(-34deg);
      -moz-transform: rotateY(-34deg);
      transform: rotateY(-34deg);
      -webkit-transition-duration: 0.5s;
      -moz-transition-duration: 0.5s;
      transition-duration: 0.5s;
    }

    & li:nth-child(5) {
      -webkit-transform: rotateY(-36deg);
      -moz-transform: rotateY(-36deg);
      transform: rotateY(-36deg);
      -webkit-transition-duration: 0.6s;
      -moz-transition-duration: 0.6s;
      transition-duration: 0.6s;
    }
  }

  .hardcover_front,
  .hardcover_back,
  .book_spine,
  .hardcover_front li,
  .hardcover_back li,
  .book_spine li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .hardcover_front,
  .hardcover_back {
    -webkit-transform-origin: 0% 100%;
    -moz-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }

  /* thickness of cover */
  .hardcover_front li:first-child:after,
  .hardcover_front li:first-child:before,
  .hardcover_front li:last-child:after,
  .hardcover_front li:last-child:before,
  .hardcover_back li:first-child:after,
  .hardcover_back li:first-child:before,
  .hardcover_back li:last-child:after,
  .hardcover_back li:last-child:before,
  .book_spine li:first-child:after,
  .book_spine li:first-child:before,
  .book_spine li:last-child:after,
  .book_spine li:last-child:before {
    position: absolute;
    top: 0;
    left: 0;
  }

  .book_spine {
    -webkit-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
    -moz-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
    transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
    width: 16px;
    z-index: 0;
  }

  .book {
    &:hover > .hardcover_front {
      -webkit-transform: rotateY(-145deg) translateZ(0);
      -moz-transform: rotateY(-145deg) translateZ(0);
      transform: rotateY(-145deg) translateZ(0);
      z-index: 0;
    }

    &:hover > .page li:nth-child(1) {
      -webkit-transform: rotateY(-30deg);
      -moz-transform: rotateY(-30deg);
      transform: rotateY(-30deg);
      -webkit-transition-duration: 1.5s;
      -moz-transition-duration: 1.5s;
      transition-duration: 1.5s;
    }

    &:hover > .page li:nth-child(2) {
      -webkit-transform: rotateY(-35deg);
      -moz-transform: rotateY(-35deg);
      transform: rotateY(-35deg);
      -webkit-transition-duration: 1.8s;
      -moz-transition-duration: 1.8s;
      transition-duration: 1.8s;
    }

    &:hover > .page li:nth-child(3) {
      -webkit-transform: rotateY(-118deg);
      -moz-transform: rotateY(-118deg);
      transform: rotateY(-118deg);
      -webkit-transition-duration: 1.6s;
      -moz-transition-duration: 1.6s;
      transition-duration: 1.6s;
    }

    &:hover > .page li:nth-child(4) {
      -webkit-transform: rotateY(-130deg);
      -moz-transform: rotateY(-130deg);
      transform: rotateY(-130deg);
      -webkit-transition-duration: 1.4s;
      -moz-transition-duration: 1.4s;
      transition-duration: 1.4s;
    }

    &:hover > .page li:nth-child(5) {
      -webkit-transform: rotateY(-140deg);
      -moz-transform: rotateY(-140deg);
      transform: rotateY(-140deg);
      -webkit-transition-duration: 1.2s;
      -moz-transition-duration: 1.2s;
      transition-duration: 1.2s;
    }
  }

  .coverDesign {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;

    &::after {
      background-image: -webkit-linear-gradient(
        -135deg,
        rgba(255, 255, 255, 0.45) 0%,
        transparent 100%
      );
      background-image: -moz-linear-gradient(
        -135deg,
        rgba(255, 255, 255, 0.45) 0%,
        transparent 100%
      );
      background-image: linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    & h1 {
      color: #fff;
      font-size: xx-large;
      letter-spacing: 0.05em;
      text-align: center;
      margin: 54% 0 0 0;
      text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1);
    }

    & p {
      color: #f8f8f8;
      font-size: 1em;
      text-align: center;
      text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .yellow {
    background-color: #f1c40f;
    background-image: -webkit-linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
    background-image: -moz-linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
    background-image: linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
  }

  .blue {
    background-color: #3498db;
    background-image: -webkit-linear-gradient(top, #3498db 58%, #2a90d4 0%);
    background-image: -moz-linear-gradient(top, #3498db 58%, #2a90d4 0%);
    background-image: linear-gradient(top, #3498db 58%, #2a90d4 0%);
  }

  .grey {
    background-color: #f8e9d1;
    background-image: -webkit-linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%);
    background-image: -moz-linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%);
    background-image: linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%);
  }

  .ribbon {
    background: #c0392b;
    color: #fff;
    display: block;
    font-size: 0.7em;
    position: absolute;
    top: 11px;
    right: 1px;
    width: 40px;
    height: 20px;
    line-height: 20px;
    letter-spacing: 0.15em;
    text-align: center;
    -webkit-transform: rotateZ(45deg) translateZ(1px);
    -moz-transform: rotateZ(45deg) translateZ(1px);
    transform: rotateZ(45deg) translateZ(1px);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 10;

    &::before {
      position: absolute;
      top: -20px;
      width: 0;
      height: 0;
      border-bottom: 20px solid #c0392b;
      border-top: 20px solid transparent;
      left: -20px;
      border-left: 20px solid transparent;
    }

    &::after {
      position: absolute;
      top: -20px;
      width: 0;
      height: 0;
      border-bottom: 20px solid #c0392b;
      border-top: 20px solid transparent;
      right: -20px;
      border-right: 20px solid transparent;
    }
  }

  figcaption {
    padding-left: 40px;
    text-align: left;
    position: absolute;
    top: 30%;
    left: 160px;
    width: 410px;

    & h1 {
      margin: 0;
    }

    & span {
      color: #16a085;
      padding: 0.6em 0 1em 0;
      display: block;
    }

    & p {
      color: #63707d;
      line-height: 1.3;
    }
  }

  @media screen and (max-width: 37.8125em) {
    .align > li {
      width: 100%;
      min-height: 440px;
      height: auto;
      padding: 0;
      margin: 0 0 30px 0;
    }

    .book {
      margin: 0 auto;
    }

    figcaption {
      text-align: center;
      width: 320px;
      top: 250px;
      padding-left: 0;
      left: -80px;
      font-size: 90%;
    }
  }
`;
