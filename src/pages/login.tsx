import React from 'react';
import styled from 'styled-components';
import Header from '@/components/base/Header';
import HeaderBackBtn from '@/components/base/HeaderBackBtn';
import { useGoBack } from '@/hooks/useGoBack';
import AuthForm from '@/components/auth/AuthForm';
import FullHeightPage from '@/components/system/FullHeightPage';

const Login = () => {
  const goBack = useGoBack();

  return (
    <FullHeightPage>
      <Header title={'로그인'} headerLeft={<HeaderBackBtn onClick={() => goBack()} />} />
      <AuthForm mode={'login'} />
    </FullHeightPage>
  );
};

const Page = styled.div``;

export default Login;
