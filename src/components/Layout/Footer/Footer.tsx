import { StyledFooter, StyledFooterText } from "./styles";
import useUiTextStore from "../../../stores/ui-text-store";

/** footer 컴포넌트 */
function Footer() {
  const { json } = useUiTextStore();

  return (
    <StyledFooter>
      <StyledFooterText>
        {json['description']}
      </StyledFooterText>
    </StyledFooter>
  );
}

export default Footer;