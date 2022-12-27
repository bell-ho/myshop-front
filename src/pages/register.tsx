import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import BasicLayout from '@/components/templates/BasicLayout';

const Register = () => {
  return (
    <BasicLayout title={'회원가입'} hasBackBtn>
      <AuthForm mode={'register'} />
    </BasicLayout>
  );
};

export default Register;
