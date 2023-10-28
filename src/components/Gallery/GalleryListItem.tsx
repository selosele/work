import { StyledGalleryListItem, StyledImageBox } from "./styles";

/** 갤러리 리스트 아이템 컴포넌트 */
function GalleryListItem() {
  return (
    <StyledGalleryListItem>
      <StyledImageBox>
        <img src="https://res.cloudinary.com/dbrgfvqgb/image/upload/v1640960758/bl1ivsw8kykmudbm9pdc.jpg" alt="" />
      </StyledImageBox>

      <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque totam, corrupti eum doloribus illo nihil molestias, velit aut saepe excepturi mollitia expedita! Odit in minima voluptatibus at ipsam! Enim, quibusdam!</p>
      </div>
    </StyledGalleryListItem>
  );
}

export default GalleryListItem;