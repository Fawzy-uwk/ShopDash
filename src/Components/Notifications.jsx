import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../Contexts/ContextProvider";

const Notifications = () => {
  const { currentColor,setIsClicked, initialState } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 w-full justify-between items-center">
          <p className="font-semibold text-lg dark:text-gray-200 ">
            Notifications
          </p>
          <button
            type="button"
            className="text-white text-xs p-2 rounded-full "
            style={{ backgroundColor: currentColor }}
          >
            {" "}
            {chatData.length} New
          </button>
        </div>
        <button
          type="button"
          className="rounded-full p-3 hover:bg-gray-100 mt-2 block"
          onClick={() => setIsClicked(initialState)}
        >
          <MdOutlineCancel size={20} color={currentColor} />
        </button>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
