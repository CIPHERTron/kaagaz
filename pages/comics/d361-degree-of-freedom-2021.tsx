import { Layout, Container, AboutComponent, PdfView } from '../../components';

const comic1 = () => {
  return (
    <Layout
      pathname={'/comics/d361-degree-of-freedom-2021'}
      pageTitle='Degree of Freedom 2021'
      pageDescription='Degree of Freedom 2021'
    >
      <div style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
        <PdfView src='/docs/d361-degree-of-freedom-2021.pdf' />
      </div>
    </Layout>
  );
};
export default comic1;
