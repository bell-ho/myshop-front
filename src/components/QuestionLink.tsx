import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '@/lib/colors';

interface Props {
  question: string;
  name: string;
  to: string;
  className?: string;
}

const QuestionLink = ({ question, to, name, className }: Props) => {
  return (
    <Block className={className}>
      {question} <Link href={to}>{name}</Link>
    </Block>
  );
};

const Block = styled.div`
  color: ${colors.gray3};

  a {
    font-weight: 600;
    color: ${colors.gray5};
  }
`;

export default QuestionLink;
