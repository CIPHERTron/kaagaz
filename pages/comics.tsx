import React from 'react';
import { Layout, Container } from '../components';

const Contacts = () => {
  return (
    <Layout pathname={'/comics'} pageTitle='Comics' pageDescription='Comics and stuff!'>
      <Container>
        <p className='page-intro'>Comics Page</p>
      </Container>
    </Layout>
  );
};

export default Contacts;
