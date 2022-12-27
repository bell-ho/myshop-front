import React from 'react';
import FullHeightPage from '@/components/system/FullHeightPage';
import Header from '@/components/base/Header';
import HeaderBackBtn from '@/components/base/HeaderBackBtn';
import { useGoBack } from '@/hooks/useGoBack';
import styled from 'styled-components';

interface Props {
  hasBackBtn?: boolean;
  title?: string;
  children?: React.ReactNode;
}

const BasicLayout = ({ hasBackBtn, title, children }: Props) => {
  const goBack = useGoBack();
  return (
    <FullHeightPage>
      <Header
        title={title}
        headerLeft={hasBackBtn ? <HeaderBackBtn onClick={goBack} /> : undefined}
      />
      <Content>{children}</Content>
    </FullHeightPage>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default BasicLayout;
