import { StyledModalCloseButton } from "./styles";

/** Modal 컴포넌트 */
function ModalCloseButton(props) {
  return (
    <StyledModalCloseButton
      type="button"
      onClick={props.onClick}
    >
      닫기
    </StyledModalCloseButton>
  );
}

export default ModalCloseButton;