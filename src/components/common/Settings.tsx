import React, { useState } from "react";
import "../css/settingsPage.scss";
import { SettingPageT } from "../../types/Pages";

const Settings = () => {
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
        color: "grey",
      },
      {
        id: 2,
        color: "grey",
      },
    ],
    fontColor: [
      {
        id: 1,
        color: "grey",
      },
      {
        id: 2,
        color: "grey",
      },
    ],
  });

  const [actives, setActives] = useState({
    backgroundId: 2,
    fontSizeId: 3,
    fontColorId: 1,
  });
  const onBackground = (color: string) => {};
  const onSize = (size: string) => {};

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
              onClick={() => onSize(size)}
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
              onClick={() => onBackground(color)}
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
              onClick={() => onBackground(color)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
