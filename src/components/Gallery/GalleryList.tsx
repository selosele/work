import { Children } from "../../types/global";
import { StyledGalleryList } from "./styles";

/** 갤러리 리스트 컴포넌트 */
function GalleryList({ children }: Children) {
  return (
    <StyledGalleryList>
      {children}
    </StyledGalleryList>
  );
}

export default GalleryList;