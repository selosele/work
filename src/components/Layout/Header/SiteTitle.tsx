/** 사이트 타이틀 컴포넌트 */
function SiteTitle(props: { text: string }) {
  return (
    <h1>
      {props.text}
    </h1>
  );
}

export default SiteTitle;