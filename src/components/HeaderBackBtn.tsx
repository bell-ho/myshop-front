import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';

interface Props {
  onClick?: () => void;
}

const HeaderBackBtn = ({ onClick }: Props) => {
  return (
    <IconBtn onClick={onClick}>
      <ArrowBackIcon />
    </IconBtn>
  );
};

const IconBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: -8px;
`;

export default HeaderBackBtn;
