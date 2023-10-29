import { create } from 'zustand';
import { UiTextJson, UiTextState } from '../types/ui-text';
import json from '../ui-text.json';

/** UI Text Store */
const useUiTextStore = create<UiTextState>(set => ({
  json: {} as UiTextJson,
  load: () => set({ json: json as UiTextJson }),
}));

export default useUiTextStore;