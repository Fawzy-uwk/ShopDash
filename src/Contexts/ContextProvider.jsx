import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const [currentMode, setCurrentMode] = useState("Light");
  const [currentColor, setCurrentColor] = useState("#1189bd");
  const [themeSettings, setThemeSettings] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    const savedColor = localStorage.getItem("colorMode");

    if (savedMode) {
      setCurrentMode(savedMode);
    }

    if (savedColor) {
      setCurrentColor(savedColor);
    }
  }, []);

  const setMode = (mode) => {
    setCurrentMode(mode);
    localStorage.setItem("themeMode", mode);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });
  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
