import { StyledModalTitle } from "./styles";

/** Modal 타이틀 컴포넌트 */
function ModalTitle({ title }) {
  return (
    <StyledModalTitle>
      {title}
    </StyledModalTitle>
  );
}

export default ModalTitle;