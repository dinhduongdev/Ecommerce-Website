import LightPng from "../../assets/images/website/light-mode-button.png";
import DarkPng from "../../assets/images/website/dark-mode-button.png";
import React from "react";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const rootElement = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        src={LightPng}
        alt=""
        className={`w-12 absolute z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        src={DarkPng}
        alt=""
        className="w-12"
      />
    </div>
  );
};

export default DarkMode;
