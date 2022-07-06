export interface PageT {
  _id: string;
  name: string;
  type: string;
  description: string;
}

export interface SettingColor {
  id: string | number;
  color: string;
}

export interface StoreSettingPageT {
  fontSize: {
    id: string | number;
    size: string;
  };
  background: SettingColor;
  fontColor: SettingColor;
}
