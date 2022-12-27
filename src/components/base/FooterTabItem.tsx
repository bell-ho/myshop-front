import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import SettingsIcon from '@mui/icons-material/Settings';
import { colors } from '@/lib/colors';
import Link from 'next/link';

type FooterTabType = 'home' | 'search' | 'add' | 'bookmarks' | 'setting';

const tabMap = {
  home: HomeIcon,
  search: SearchIcon,
  add: AddCircleOutlineIcon,
  bookmarks: BookmarksIcon,
  setting: SettingsIcon,
};

interface Props {
  icon: keyof typeof tabMap;
  isActive?: boolean;
  to?: string;
}

const FooterTabItem = ({ icon, isActive, to }: Props) => {
  const iconEl = React.createElement(tabMap[icon]);
  if (to) {
    return (
      <Link href={to}>
        <LinkItem $isActive={isActive}>{iconEl}</LinkItem>
      </Link>
    );
  }

  return <ButtonItem $isActive={isActive}>{iconEl}</ButtonItem>;
};

const sharedStyle = (isActive?: boolean) => css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${isActive &&
  css`
    color: ${colors.primary};
  `}
`;

const LinkItem = styled.div<{ $isActive?: boolean }>`
  ${(props) => sharedStyle(props.$isActive)}
`;

const ButtonItem = styled.button<{ $isActive?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  outline: none;
  border: none;
  ${(props) =>
    props.$isActive &&
    css`
      color: ${colors.primary};
    `}
`;

export default FooterTabItem;
