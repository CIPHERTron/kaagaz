import React from 'react';
import { Layout, Container } from '../components';
import BookAnimation from '../components/bookAnimation';
import { MobileBook } from '../styles/legacy.styles';

const Contacts = () => {
  return (
    <Layout pathname={'/legacy'} pageTitle='Legacy' pageDescription='Legacy!'>
      <Container>
        <MobileBook>
          Reading a book works best on desktop mode. If you are using mobile or tablets you can go
          ahead and download the book.
        </MobileBook>
        <BookAnimation
          src='/docs/legacy/Capture.pdf'
          btnText='Read Book'
          color='blue'
          source='Capture 2020'
          author='D361'
          text='Capture'
          year='2020'
        />
        <BookAnimation
          src='/docs/legacy/Colours.pdf'
          btnText='Read Book'
          color='blue'
          source='Colours 2019'
          author='D361'
          text='Colours'
          year='2019'
        />
        <BookAnimation
          src='/docs/legacy/War-and-Peace.pdf'
          btnText='Read Book'
          color='blue'
          source='War and Peace 2018'
          author='D361'
          text='War and Peace'
          year='2018'
        />
        <BookAnimation
          src='/docs/legacy/Force-Awakens.pdf'
          btnText='Read Book'
          color='blue'
          source='Force Awakens 2016'
          author='D361'
          text='Force Awakens'
          year='2016'
        />
      </Container>
    </Layout>
  );
};

export default Contacts;
