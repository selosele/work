import { useState } from "react";
import { StyledGalleryListItem } from "./styles";
import { UiTextWorks } from "../../types/ui-text";
import GalleryImageBox from "./GalleryImageBox";
import GalleryTextBox from "./GalleryTextBox";
import Modal from "../Modal/Modal";

/** 갤러리 리스트 아이템 컴포넌트 */
function GalleryListItem(props: UiTextWorks) {

  const [modalIsOpen, setIsOpen] = useState(false);

  /** 클릭 이벤트 */
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    setIsOpen(true);
  };

  /** Modal 닫기 */
  const closeModal = (): void => setIsOpen(false);

  return (
    <>
      <StyledGalleryListItem>
        <a href="#/" onClick={handleClick}>
          <GalleryImageBox
            image={props.image}
          />
          
          <GalleryTextBox
            title={props.title}
            description={props.description}
          />
        </a>
      </StyledGalleryListItem>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        title={props.title}
      >
        {props.description}
      </Modal>
    </>
  );
}

export default GalleryListItem;