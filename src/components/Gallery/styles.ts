import tw from "tailwind-styled-components";

/** 갤러리 리스트 컴포넌트 스타일 */
export const StyledGalleryList = tw.ul`
  flex
  flex-wrap
  gap-5
`;

/** 갤러리 리스트 아이템 컴포넌트 스타일 */
export const StyledGalleryListItem = tw.li`
  relative
  flex
  items-center
  gap-5
  w-[calc(50%-1.25rem)]
  pl-[9.5rem]
`;

/** 텍스트 박스 컨테이너 스타일 */
export const StyledTextBoxContainer = tw.div`
  flex
  flex-wrap
`;

/** 텍스트 박스 타이틀 스타일 */
export const StyledTextBoxTitle = tw.h2`
  
`;

/** 텍스트 박스 설명 스타일 */
export const StyledTextBoxDescription = tw.div`
  mt-2
  text-base
  w-full
`;

/** 이미지 박스 컴포넌트 스타일 */
export const StyledImageBox = tw.div`
  flex
  justify-center
  items-center
  text-center
  overflow-hidden
  absolute
  top-0
  bottom-0
  left-0
  w-[8rem]
  h-20
  my-auto
  bg-gray-200
`;