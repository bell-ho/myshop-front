import React from 'react';
import FullHeightPage from '@/components/system/FullHeightPage';
import styled from 'styled-components';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';

interface Props {
  children?: React.ReactNode;
}

const TabLayout = ({ children }: Props) => {
  return (
    <FullHeightPage>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </FullHeightPage>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default TabLayout;
