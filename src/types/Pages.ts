export interface PageT {
  _id: string;
  name: string;
  type: string;
  description: string;
}

interface SettingColor {
  id: string | number;
  color: string;
}

export interface SettingPageT {
  fontSize: {
    id: string | number;
    size: string;
  }[];
  backgrounds: SettingColor[];
  fontColor: SettingColor[];
}
