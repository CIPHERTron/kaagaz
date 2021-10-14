import React from 'react';
import { Layout, Container, AboutComponent, PdfView } from '../../components';

const comic1 = () => {
  return (
    <Layout
      pathname={'/comics/d361-capture-2020'}
      pageTitle='Capture 2020'
      pageDescription='Comic Capture 2020'
    >
      <div style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
        <PdfView src='/docs/d361-capture-2020.pdf' />
      </div>
    </Layout>
  );
};
export default comic1;
