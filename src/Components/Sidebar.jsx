import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import { links } from "../data/dummy.tsx";
import { TooltipComponent } from "@syncfusion/ej2-react-popups/index";
import { useStateContext } from "../Contexts/ContextProvider.jsx";
const Sidebar = () => {
  const { activeMenu, setActiveMenu, currentColor } = useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg dark:text-white text-gray-50  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-300 m-2";
  return (
    <div
      className={
        activeMenu
          ? "fixed h-[100dvh] p-3 bg-white dark:bg-main-dark-bg shadow-lg md:overflow-hidden md:hover:overflow-auto overflow-auto"
          : "hidden"
      }
    >
      <div className="flex items-center justify-between">
        <Link
          to="/"
          onClick={() => {}}
          className="flex ml-3 items-center gap-3"
        >
          <SiShopware size={22} color={currentColor} />
          <span
            className="font-bold text-black text-2xl"
            style={{ color: currentColor }}
          >
            Shop<span className="dark:text-white text-slate-700">Dash</span>
          </span>
        </Link>

        <TooltipComponent content="Menu" position="BottomCenter">
          <button
            type="button"
            className="rounded-full p-3 hover:bg-gray-100 mt-2 block"
            onClick={() => setActiveMenu((prevActive) => !prevActive)}
          >
            <MdOutlineCancel size={20} color={currentColor} />
          </button>
        </TooltipComponent>
      </div>

      <div className="mt-10">
        {links.map((link) => (
          <div
            key={link.title}
            className=" m-3 mt-4 uppercase"
            style={{ color: currentColor }}
          >
            <p>{link.title}</p>
            {link.links.map((item) => (
              <NavLink
                key={item.name}
                to={`${item.name}`}
                onClick={() => {}}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                style={({ isActive }) =>
                  isActive ? { backgroundColor: currentColor } : {}
                }
                color={currentColor}
              >
                {item.icon}
                <span className="capitalize ">{item.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
