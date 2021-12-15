import React from 'react';
import { Layout, Container } from '../components';
import BookAnimation from '../components/bookAnimation';

const Comics = () => {
  return (
    <Layout pathname={'/comics'} pageTitle='Comics' pageDescription='Comics and stuff!'>
      <Container>
        <BookAnimation
          src='/comics/d361-degree-of-fredoom-2021'
          btnText='Read Comic'
          color='blue'
          source='Degree of Fredoom 2021'
          author='Abhrant Panigrahi'
          text='DOF'
          year='2021'
        />
        <BookAnimation
          src='/comics/d361-capture-2020'
          btnText='Read Comic'
          color='blue'
          source='Capture 2020'
          author='Abhrant Panigrahi and Subham Sai Behera'
          text='CAPTURE'
          year='2020'
        />
        <BookAnimation
          src='/comics/d361-colours-2019'
          btnText='Read Comic'
          color='blue'
          source='Colours 2019'
          author='Aalisha Padhy and Navneet Reddy'
          text='Colours'
          year='2019'
        />
        <BookAnimation
          src='/comics/d361-war-and-peace-2018'
          btnText='Read Comic'
          color='blue'
          source='War and Peace 2018'
          author='Partha Dhal'
          text='War and Peace'
          year='2018'
        />
      </Container>
    </Layout>
  );
};

export default Comics;
