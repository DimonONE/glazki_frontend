import { createGlobalState } from "react-hooks-global-state";
import { PageT, StoreSettingPageT } from "../types/Pages";

interface initialState {
  pages: PageT[] | null;
  filterByCategory: any;
  settingPage: StoreSettingPageT;
}

const initialState: initialState = {
  pages: null,
  filterByCategory: null,
  settingPage: {
    fontSize: {
      id: 1,
      size: "",
    },
    background: {
      id: 1,
      color: "",
    },
    fontColor: {
      id: 1,
      color: "",
    },
  },
};
export const { useGlobalState } = createGlobalState(initialState);
