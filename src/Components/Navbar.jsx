import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import {
  FiBell,
  FiMessageSquare,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

import avatar from "../data/avatar.jpg";
import { useStateContext } from "../Contexts/ContextProvider";
import { MdKeyboardArrowDown } from "react-icons/md";
import Cart from "./Cart";
import Chat from "./Chat";
import Notifications from "./Notifications";
import UserProfile from "./UserProfile";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className=" p-2 md:mx-6 flex items-center justify-between">
      <div className="flex  items-center">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActive) => !prevActive)}
          icon={<AiOutlineMenu />}
          color={currentColor}
        />
        <NavButton
          title="Search"
          customFunc={() => {}}
          icon={<FiSearch />}
          color={currentColor}
        />
      </div>
      <div className="flex items-center ">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          icon={<FiShoppingCart />}
          color={currentColor}
        />
        <NavButton
          title="Chat"
          dotColor={currentColor}
          customFunc={() => handleClick("chat")}
          icon={<FiMessageSquare />}
          color={currentColor}
        />
        <NavButton
          title="Notification"
          dotColor={currentColor}
          customFunc={() => handleClick("notification")}
          icon={<FiBell />}
          color={currentColor}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex cursor-pointer items-center p-1 gap-2 "
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full h-10 w-10" />

            <p style={{ color: currentColor }}>
              <span className=" text-14">Hi,</span>{" "}
              <span className=" font-bold ml-1 text-14">User</span>
            </p>
            <MdKeyboardArrowDown color={currentColor} className=" text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notifications />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
