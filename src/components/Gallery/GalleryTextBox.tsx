import { UiTextWorks } from "../../types/ui-text";

/** 갤러리 텍스트 박스 컴포넌트 */
function GalleryTextBox(props: UiTextWorks) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default GalleryTextBox;