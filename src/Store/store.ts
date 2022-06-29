import { createGlobalState } from "react-hooks-global-state";
import { PageT, SettingPageT } from "../types/Pages";

interface initialState {
  pages: PageT[] | null;
  filterByCategory: any;
  settingPage: SettingPageT;
}

const initialState: initialState = {
  pages: null,
  filterByCategory: null,
  settingPage: {
    fontSize: [
      {
        id: 1,
        size: "14px",
      },
    ],
    backgrounds: [
      {
        id: 1,
        color: "grey",
      },
    ],
    fontColor: [
      {
        id: 1,
        color: "grey",
      },
    ],
  },
};
export const { useGlobalState } = createGlobalState(initialState);
