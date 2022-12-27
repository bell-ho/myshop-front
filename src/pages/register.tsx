import React from 'react';
import Header from '@/components/base/Header';
import HeaderBackBtn from '@/components/base/HeaderBackBtn';
import { useGoBack } from '@/hooks/useGoBack';
import FullHeightPage from '@/components/system/FullHeightPage';
import AuthForm from '@/components/auth/AuthForm';
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
