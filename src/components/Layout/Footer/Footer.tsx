import { StyledFooter, StyledFooterText } from "./styles";

/** footer 컴포넌트 */
function Footer(props: { text: string }) {
  return (
    <StyledFooter>
      <StyledFooterText>
        {props.text}
      </StyledFooterText>
    </StyledFooter>
  );
}

export default Footer;