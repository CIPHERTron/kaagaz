import React from 'react';
import { Layout, Container, AboutComponent } from '../components';

const About = () => {
  return (
    <Layout
      pathname={'/about'}
      pageTitle='About'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <AboutComponent />
      </Container>
    </Layout>
  );
};

export default About;
