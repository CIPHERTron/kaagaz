import React from 'react';
import { Layout, Container } from '../components';
import BookAnimation from '../components/bookAnimation';

const Comics = () => {
  return (
    <Layout pathname={'/comics'} pageTitle='Comics' pageDescription='Comics and stuff!'>
      <Container>
        <BookAnimation
          src='/comics/d361-capture-2020'
          btnText='Read Comic'
          color='blue'
          source='Capture 2020'
          author='Abhrant Panigrahi and Subham Sai Behera'
        />
        <BookAnimation
          src='/comics/d361-colours-2019'
          btnText='Read Comic'
          color='blue'
          source='Colours 2019'
          author='Aalisha Padhy and Navneet Reddy'
        />
        <BookAnimation
          src='/comics/d361-war-and-peace-2018'
          btnText='Read Comic'
          color='blue'
          source='War and Peace 2018'
          author='Partha Dhal'
        />
      </Container>
    </Layout>
  );
};

export default Comics;
