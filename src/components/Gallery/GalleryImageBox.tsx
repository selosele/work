import { StyledImageBox } from "./styles";
import { UiTextWorks } from "../../types/ui-text";

/** 갤러리 이미지 박스 컴포넌트 */
function GalleryImageBox(props: UiTextWorks) {
  return (
    <StyledImageBox>
      {props.image ? (
        <img src={props.image} alt="" />
      ) : (
        "no-image 스타일 필요"
      )}
    </StyledImageBox>
  );
}

export default GalleryImageBox;