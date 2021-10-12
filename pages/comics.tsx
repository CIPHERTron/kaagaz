import React from 'react';
import { Layout, Container } from '../components';
import BookAnimation from '../components/bookAnimation';

const Comics = () => {
  return (
    <Layout pathname={'/comics'} pageTitle='Comics' pageDescription='Comics and stuff!'>
      <Container>
        <p className='page-intro'>Comics Page</p>
        <BookAnimation
          src='#'
          btnText='Read Comic'
          color='blue'
          source='Fivera.net'
          author='Nikola Tesla'
          desc='Website dedicated to sharing resources'
        />
        <BookAnimation
          src='#'
          btnText='Read Comic'
          color='blue'
          source='Fivera.net'
          author='Nikola Tesla'
          desc='Website dedicated to sharing resources'
        />
        <BookAnimation
          src='#'
          btnText='Read Comic'
          color='blue'
          source='Fivera.net'
          author='Nikola Tesla'
          desc='Website dedicated to sharing resources'
        />
      </Container>
    </Layout>
  );
};

export default Comics;
