import { UiTextWorks } from "../../types/ui-text";
import { StyledTextBoxContainer, StyledTextBoxDescription, StyledTextBoxTitle } from "./styles";

/** 갤러리 텍스트 박스 컴포넌트 */
function GalleryTextBox(props: UiTextWorks) {
  return (
    <StyledTextBoxContainer>
      <StyledTextBoxTitle>
        {props.title}
      </StyledTextBoxTitle>

      {props.description &&
        <StyledTextBoxDescription>
          {props.description}
        </StyledTextBoxDescription>
      }
    </StyledTextBoxContainer>
  );
}

export default GalleryTextBox;