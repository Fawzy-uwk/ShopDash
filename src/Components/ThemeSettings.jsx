import { MdOutlineCancel } from "react-icons/md";
import { themeColors } from "../data/dummy";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsCheck } from "react-icons/bs";
import { useStateContext } from "../Contexts/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();
  

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right w-400 bg-white h-screen dark:bg-[#292b1f] dark:text-gray-200 p-7  flex flex-col gap-8">
        <div className="flex items-center justify-between ">
          <h3
            className="font-semibold text-2xl"
            style={{ color: currentColor }}
          >
            Settings
          </h3>
          <button
            type="button"
            className="rounded-full p-3 hover:bg-gray-100 mt-2 block"
            onClick={() => setThemeSettings((prev) => !prev)}
          >
            <MdOutlineCancel size={20} color={currentColor} />
          </button>
        </div>

        <div className="flex flex-col gap-3 border-r-1 border-color ml-4 ">
          <h4
            className="font-semibold text-lg "
            style={{ color: currentColor }}
          >
            Theme Options
          </h4>

          <div>
            <div className="flex items-center">
              <input
                type="radio"
                name="theme"
                id="light"
                checked={currentMode === "Light"}
                value="light"
                onChange={() => setMode("Light")}
              />
              <label htmlFor="light" className="ml-2 text-lg cursor-pointer">
                Light
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="dark"
                name="theme"
                checked={currentMode === "Dark"}
                value="dark"
                onChange={() => setMode("Dark")}
              />
              <label htmlFor="dark" className="ml-2 text-lg cursor-pointer">
                Dark
              </label>
            </div>
          </div>
        </div>

        <div className="p-4 border-t-1 border-color ">
          <h4
            className="font-semibold text-lg mb-6"
            style={{ color: currentColor }}
          >
            Color Options
          </h4>
          <div className="flex gap-3">
            {themeColors.map((theme, index) => (
              <TooltipComponent
                position="TopCenter"
                content={theme.name}
                key={index}
                className="mt-2"
              >
                <div className="relative  cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 cursor-pointer rounded-full"
                    style={{ backgroundColor: theme.color }}
                    onClick={() => setColor(theme.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        theme.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
