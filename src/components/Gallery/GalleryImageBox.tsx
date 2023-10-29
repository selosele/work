import { StyledImageBox } from "./styles";
import { UiTextWorks } from "../../types/ui-text";

/** 갤러리 이미지 박스 컴포넌트 */
function GalleryImageBox(props: UiTextWorks) {
  return (
    <StyledImageBox>
      <img src={props.image} alt="" />
    </StyledImageBox>
  );
}

export default GalleryImageBox;