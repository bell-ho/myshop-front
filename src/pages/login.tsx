import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import BasicLayout from '@/components/templates/BasicLayout';

const Login = () => {
  return (
    <BasicLayout title={'로그인'} hasBackBtn>
      <AuthForm mode={'login'} />
    </BasicLayout>
  );
};

export default Login;
