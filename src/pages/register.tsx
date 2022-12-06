import React from 'react';
import Header from '@/components/Header';
import HeaderBackBtn from '@/components/HeaderBackBtn';
import { useGoBack } from '@/hooks/useGoBack';
import FullHeightPage from '@/components/FullHeightPage';
import AuthForm from '@/components/AuthForm';
const Register = () => {
  const goBack = useGoBack();

  return (
    <FullHeightPage>
      <Header title={'회원가입'} headerLeft={<HeaderBackBtn onClick={() => goBack()} />} />
      <AuthForm mode={'register'} />
    </FullHeightPage>
  );
};

export default Register;
