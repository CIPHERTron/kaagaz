import React from 'react';
import { Layout, Container } from '../components';
import BookAnimation from '../components/bookAnimation';

const Contacts = () => {
  return (
    <Layout pathname={'/legacy'} pageTitle='Legacy' pageDescription='Legacy!'>
      <Container>
        <BookAnimation
          src='#'
          btnText='Read Comic'
          color='blue'
          source='Fivera.net'
          author='Nikola Tesla'
          text='CAPTURE'
          year='2020'
        />
        <BookAnimation
          src='#'
          btnText='Read Comic'
          color='blue'
          source='Fivera.net'
          author='Nikola Tesla'
          text='CAPTURE'
          year='2020'
        />
      </Container>
    </Layout>
  );
};

export default Contacts;
