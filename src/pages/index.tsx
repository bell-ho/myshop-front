import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';
import FullHeightPage from '@/components/system/FullHeightPage';
import styled from 'styled-components';

export default function Home() {
  return (
    <FullHeightPage>
      <Header />
      <Content />
      <Footer />
    </FullHeightPage>
  );
}

const Content = styled.div`
  flex: 1;
`;
