import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import {
  Footer,
  Navbar,
  Sidebar,
  
  ThemeSettings,
} from "./Components/index";
import ColorPicker from "./Pages/ColorPicker";

import Editor from "./Pages/Editor";
import Orders from "./Pages/Orders";
import Employees from "./Pages/Employees";
import Customers from "./Pages/Customers";
import Ecommerce from "./Pages/Ecommerce";
import {
  Area,
  Bar,
  Calender,
  ColorMapping,
  Financial,
  Kanban,
  Line,
  Pie,
  Stacked as StackedPage,
} from "./Pages";
import Pyramids from "./Pages/Charts/Pyramids";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "./Contexts/ContextProvider";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <>
      <div className={currentMode === "Dark" ? "dark md:overflow-x-hidden" : "md:overflow-x-hidden"}>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg ">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  onClick={() => setThemeSettings((prev) => !prev)}
                  style={{ background: currentColor, borderRadius: "50%" }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 relative min-h-[100dvh] fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                  : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar navbar w-full ">
                <Navbar />
              </div>

              <div className="mb-10">
                {themeSettings && <ThemeSettings />}
                <Routes>
                  {/* dashboard  */}
                  <Route path="/" element={<Ecommerce />} />
                  <Route path="/ecommerce" element={<Ecommerce />} />

                  {/* pages  */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

                  {/* apps  */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/schedules" element={<Calender />} />
                  <Route path="/color-picker" element={<ColorPicker />} />

                  {/* charts  */}
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramids />} />
                  <Route path="/stacked" element={<StackedPage />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
