import GalleryImageBox from "./GalleryImageBox";
import GalleryTextBox from "./GalleryTextBox";
import { StyledGalleryListItem } from "./styles";
import { UiTextWorks } from "../../types/ui-text";

/** 갤러리 리스트 아이템 컴포넌트 */
function GalleryListItem(props: UiTextWorks) {
  return (
    <StyledGalleryListItem>
      <GalleryImageBox
        image={props.image}
      />
      
      <GalleryTextBox
        title={props.title}
        description={props.description}
      />
    </StyledGalleryListItem>
  );
}

export default GalleryListItem;