import SiteTitle from './SiteTitle';

/** header 컴포넌트 */
function Header(props: { text: string }) {
  return (
    <header>
      <SiteTitle text={props.text} />
    </header>
  );
}

export default Header;