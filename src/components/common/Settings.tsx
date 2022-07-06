import React, { useEffect, useState } from "react";
import "../css/settingsPage.scss";
import { SettingColor, StoreSettingPageT } from "../../types/Pages";
import { useGlobalState } from "../../Store/store";

interface SettingPageT {
  fontSize: {
    id: string | number;
    size: string;
  }[];
  backgrounds: SettingColor[];
  fontColor: SettingColor[];
}

const Settings = () => {
  const [, setSetting] = useGlobalState("settingPage");
  const [settings, setSettings] = useState<SettingPageT>({
    fontSize: [
      {
        id: 1,
        size: "14px",
      },
      {
        id: 2,
        size: "18px",
      },
      {
        id: 3,
        size: "22px",
      },
    ],
    backgrounds: [
      {
        id: 1,
        color: "#fff",
      },
      {
        id: 2,
        color: "red",
      },
    ],
    fontColor: [
      {
        id: 1,
        color: "grey",
      },
      {
        id: 2,
        color: "red",
      },
    ],
  });

  const [actives, setActives] = useState({
    backgroundId: 2,
    fontSizeId: 3,
    fontColorId: 1,
  });
  const onBackground = (id: number, color: string) => {
    setActives((prevState) => ({ ...prevState, backgroundId: id }));
    setSetting((prev) => ({
      ...prev,
      background: {
        id,
        color,
      },
    }));
  };
  const onColor = (id: number, color: string) => {
    setActives((prevState) => ({ ...prevState, fontColorId: id }));
    setSetting((prev) => ({
      ...prev,
      fontColor: {
        id,
        color,
      },
    }));
  };
  const onSize = (id: number, size: string) => {
    setActives((prevState) => ({ ...prevState, fontSizeId: id }));
    setSetting((prev) => ({
      ...prev,
      fontSize: {
        id,
        size,
      },
    }));
  };

  useEffect(() => {
    return () => {
      setSetting((prev) => ({
        ...prev,
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
      }));
    };
  }, []);

  return (
    <div className="settings-page">
      <h3 className="settings-page__title">Настройки</h3>
      <div className="d-flex settings-page__content">
        <span className="setting-name">Размер шрифта</span>
        {settings.fontSize.map(({ id, size }) => (
          <div
            key={id}
            className={`setting-wrap ${
              actives.fontSizeId === id ? "active" : ""
            }`}
          >
            <span
              className="setting"
              style={{ fontSize: size }}
              onClick={() => onSize(Number(id), size)}
            >
              A
            </span>
          </div>
        ))}
      </div>
      <div className="d-flex settings-page__content">
        <span className="setting-name">Цвет текста</span>
        {settings.fontColor.map(({ id, color }) => (
          <div
            key={id}
            className={`setting-wrap ${
              actives.fontColorId === id ? "active" : ""
            }`}
          >
            <span
              className="setting"
              style={{ backgroundColor: color }}
              onClick={() => onColor(Number(id), color)}
            />
          </div>
        ))}
      </div>
      <div className="d-flex settings-page__content">
        <span className="setting-name">Цвет фона</span>
        {settings.backgrounds.map(({ id, color }) => (
          <div
            key={id}
            className={`setting-wrap ${
              actives.backgroundId === id ? "active" : ""
            }`}
          >
            <span
              className="setting"
              style={{ backgroundColor: color }}
              onClick={() => onBackground(Number(id), color)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
