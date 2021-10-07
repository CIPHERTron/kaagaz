import React from 'react';
import HomeHeader from './home-header';
import PageHeader from './page-header';
import NullHeader from './null-header';

interface IHeader {
  pathname: string;
  title?: string;
  date?: Date;
  articleImage?: string;
}

const header = ({ pathname, title }: IHeader) => {
  switch (pathname) {
    case '/':
      return <HomeHeader />;
    case '/stories':
      return <NullHeader headingTitle={title} />;
    case '/scribbles':
      return <NullHeader headingTitle={title} />;
    case '/poems':
      return <NullHeader headingTitle={title} />;
    case '/miscellaneous':
      return <NullHeader headingTitle={title} />;
    case '/about':
      return <NullHeader headingTitle={title} />;
    default:
      return <PageHeader headingTitle={title} />;
  }
};

export default header;
