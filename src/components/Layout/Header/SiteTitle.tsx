import useUiTextStore from "../../../stores/ui-text-store";

/** 사이트 타이틀 컴포넌트 */
function SiteTitle() {
  const { json } = useUiTextStore();

  return (
    <h1>
      {json['title']}
    </h1>
  );
}

export default SiteTitle;