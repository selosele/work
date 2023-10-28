import tw from "tailwind-styled-components";

/** 갤러리 리스트 컴포넌트 스타일 */
export const StyledGalleryList = tw.ul`
  flex
`;

/** 갤러리 리스트 아이템 컴포넌트 스타일 */
export const StyledGalleryListItem = tw.li`
  flex
  items-center
  gap-5
`;

/** 이미지 박스 컴포넌트 스타일 */
export const StyledImageBox = tw.div`
  w-[20rem]
`;