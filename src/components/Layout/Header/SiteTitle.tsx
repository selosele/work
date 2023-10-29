import useUiTextStore from "../../../stores/ui-text-store";
import { StyledSiteTitle } from "./styles";

/** 사이트 타이틀 컴포넌트 */
function SiteTitle() {
  const { json } = useUiTextStore();

  return (
    <StyledSiteTitle>
      {json['title']}
    </StyledSiteTitle>
  );
}

export default SiteTitle;