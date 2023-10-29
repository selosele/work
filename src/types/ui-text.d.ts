/** UI Text JSON 인터페이스 */
export interface UiTextJson {

  /** 사이트 타이틀 */
  title?: string;

  /** 사이트 설명 */
  description?: string;

  /** 포트폴리오 리스트 */
  works?: UiTextWorks[];
}

/** UI Text Works 인터페이스 */
export interface UiTextWorks {

  /** 포트폴리오 타이틀 */
  title?: string;

  /** 포트폴리오 설명 */
  description?: string;

  /** 포트폴리오 이미지 경로 */
  image?: string;
}

/** UI Text State 인터페이스 */
export interface UiTextState {

  /** JSON 파일 */
  json: UiTextJson;

  /** JSON 파일 로드 */
  load: () => void;
};