import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Children } from '../../types/global';
import { StyledLayout, StyledMain } from './styles';

/** 레이아웃 컴포넌트 */
function Layout({ children }: Children) {
  return (
    <StyledLayout>
      <Header />

      <StyledMain>
        {children}
      </StyledMain>

      <Footer />
    </StyledLayout>
  );
}

export default Layout;