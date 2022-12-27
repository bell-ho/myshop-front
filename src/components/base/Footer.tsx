import React, { useMemo } from 'react';
import styled from 'styled-components';
import { colors } from '@/lib/colors';
import FooterTabItem from '@/components/base/FooterTabItem';
import { useRouter } from 'next/router';

const paths = ['search', 'bookmarks', 'setting'] as const;

const isValidPath = (path: any): path is typeof paths[number] => {
  return paths.includes(path);
};

const Footer = () => {
  const router = useRouter();

  const currentPage = useMemo(() => {
    const path = router.asPath.split('/')[1];

    if (isValidPath(path)) {
      return path;
    }

    return 'home';
  }, [router.asPath]);

  return (
    <StyledFooter>
      <FooterTabItem icon={'home'} isActive={currentPage == 'home'} to={'/'}></FooterTabItem>
      <FooterTabItem
        icon={'search'}
        isActive={currentPage == 'search'}
        to={'/search'}
      ></FooterTabItem>
      <FooterTabItem icon={'add'}></FooterTabItem>
      <FooterTabItem
        icon={'bookmarks'}
        isActive={currentPage == 'bookmarks'}
        to={'/bookmarks'}
      ></FooterTabItem>
      <FooterTabItem
        icon={'setting'}
        isActive={currentPage == 'setting'}
        to={'/setting'}
      ></FooterTabItem>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 56px;
  border-top: 1px solid ${colors.gray0};
  display: flex;
  background-color: ${colors.gray0};
`;

export default Footer;
