import tw from 'tailwind-styled-components';

/** Modal 닫기 버튼 컴포넌트 스타일 */
export const StyledModalCloseButton = tw.button`
  block
  w-12
  h-10
  ml-auto
  bg-slate-100
  text-base
`;

/** Modal 타이틀 컴포넌트 스타일 */
export const StyledModalTitle = tw.h2`
  mb-4
  font-bold
  text-4xl
`;