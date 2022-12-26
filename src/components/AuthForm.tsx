import React, { useCallback } from 'react';
import styled from 'styled-components';
import LabelInput from '@/components/LabelInput';
import Button from '@/components/Button';
import QuestionLink from '@/components/QuestionLink';
import useInputs from '@/hooks/useInputs';
import { useMutation, useQuery } from 'react-query';
import { axios } from '@/utils/axios';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

interface Props {
  mode: 'login' | 'register';
}

interface Params {
  email: string;
  password: string;
}

const authDescription = {
  login: {
    usernamePlaceholder: '아이디를 입력하세요.',
    passwordPlaceholder: '비밀번호를 입력하세요.',
    buttonText: '로그인',
    actionText: '회원가입',
    question: '계정이 없으신가요?',
    actionLink: '/register',
  },
  register: {
    usernamePlaceholder: '3~12자 사이의 알파벳, 숫자, _사용',
    passwordPlaceholder: '8자 이상 입력',
    buttonText: '회원가입',
    actionText: '로그인',
    question: '계정이 있으신가요?',
    actionLink: '/login',
  },
};

const AuthForm = ({ mode }: Props) => {
  const router = useRouter();
  const { usernamePlaceholder, passwordPlaceholder, buttonText, actionText, question, actionLink } =
    authDescription[mode];

  const [{ email, password }, onChange, reset, , errorCheck, onErrorCheck] = useInputs({
    email: '',
    password: '',
  });

  const { mutate, isLoading } = useMutation(
    (params: Params) =>
      mode === 'register'
        ? axios.post(`/api/v1/auth/signup`, params)
        : axios.post(`/api/v1/auth/signin`, params),
    {
      onSuccess: (data) => {
        localStorage.setItem('ACCESS_TOKEN', data?.data?.token);
        if (mode === 'register') {
          router.push('/login');
          return;
        }
        router.push('/');
      },
    },
  );

  const onSign = useCallback(async () => {
    await mutate({ email, password });
  }, [email, password]);

  return (
    <Block>
      <InputGroup>
        <LabelInput
          name={'email'}
          onChange={onChange}
          label={'아이디'}
          placeholder={usernamePlaceholder}
          disabled={isLoading}
        />
        <LabelInput
          name={'password'}
          onChange={onChange}
          label={'비밀번호'}
          placeholder={passwordPlaceholder}
          disabled={isLoading}
        />
      </InputGroup>
      <ActionsBox>
        <Button onClick={onSign} layoutMode={'fullWidth'} disabled={isLoading}>
          {buttonText}
        </Button>
        <QuestionLink question={question} name={actionText} to={actionLink} />
      </ActionsBox>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
  justify-content: space-between;
  gap: 24px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ActionsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export default AuthForm;
