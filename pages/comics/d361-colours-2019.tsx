import React from 'react';
import { Layout, Container, AboutComponent, PdfView } from '../../components';

const comic1 = () => {
  return (
    <Layout
      pathname={'/comics/d361-colours-2019'}
      pageTitle='Colours 2019'
      pageDescription='Comic Colours 2019'
    >
      <div style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
        <PdfView src='/docs/d361-colours-2019.pdf' />
      </div>
    </Layout>
  );
};
export default comic1;
