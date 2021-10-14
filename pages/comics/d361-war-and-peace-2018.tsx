import React from 'react';
import { Layout, Container, AboutComponent, PdfView } from '../../components';

const comic1 = () => {
  return (
    <Layout
      pathname={'/comics/d361-war-and-peace-2018'}
      pageTitle='War and Peace 2018'
      pageDescription='Comic War and Peace 2018'
    >
      <div style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
        <PdfView src='/docs/d361-war-and-peace-2018.pdf' />
      </div>
    </Layout>
  );
};
export default comic1;
