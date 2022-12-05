import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import HeaderBackBtn from '@/components/HeaderBackBtn';
import { useGoBack } from '@/hooks/useGoBack';

const Login = () => {
  const goBack = useGoBack();

  return (
    <Page>
      <Header
        title={'로그인'}
        headerLeft={
          <HeaderBackBtn
            onClick={() => {
              goBack();
            }}
          />
        }
      />
    </Page>
  );
};

const Page = styled.div``;

export default Login;
