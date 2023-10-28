import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { StyledLayout, StyledMain } from './styles';

/** 레이아웃 컴포넌트 */
function Layout(props: { children: React.ReactNode }) {
  return (
    <StyledLayout>
      <Header text="selosele's portfolio" />

      <StyledMain>
        {props.children}
      </StyledMain>

      <Footer text="selosele's portfolio" />
    </StyledLayout>
  );
}

export default Layout;