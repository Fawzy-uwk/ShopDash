import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";

import { useStateContext } from "../Contexts/ContextProvider";

import product5 from "../data/product5.jpg";
import product6 from "../data/product6.jpg";
import product7 from "../data/product7.jpg";

import { useState } from "react";
import Button from "./Button";

const Cart = () => {
  const { currentColor,setIsClicked,initialState } = useStateContext();
  const [cartData, setCartData] = useState([
    {
      id: 1,
      image: product5,
      name: "butterscotch ice-cream",
      category: "Milk product",
      price: 25,
      totalPrice: 25,
      ammount: 1,
    },
    {
      id: 2,
      image: product6,
      name: "Supreme fresh tomato",
      category: "Vegetable Item",
      price: 45,
      totalPrice: 45,
      ammount: 1,
    },
    {
      id: 3,
      image: product7,
      name: "Red color candy",
      category: "Food Item",
      price: 19,
      totalPrice: 19,
      ammount: 1,
    },
  ]);

  const totalPrice = cartData.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleMinusClick = (item) => {
    if (item.ammount > 1) {
      setCartData((prev) =>
        prev.map((i) =>
          i.id === item.id
            ? {
                ...i,
                ammount: i.ammount - 1,
                totalPrice: i.price * (i.ammount - 1),
              }
            : i
        )
      );
    } else {
      setCartData((prev) => prev.filter((i) => i.id !== item.id));
    }
  };

  const handlePlusClick = (item) => {
    setCartData((prev) =>
      prev.map((i) =>
        i.id === item.id
          ? {
              ...i,
              ammount: i.ammount + 1,
              totalPrice: i.price * (i.ammount + 1),
            }
          : i
      )
    );
  };

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            className="rounded-full p-3 hover:bg-gray-100 mt-2 block"
            onClick={() => setIsClicked(initialState)}
          >
            <MdOutlineCancel size={20} color={currentColor} />
          </button>
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold ">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {item.category}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">${item.price}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <button
                        className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "
                        onClick={() => handleMinusClick(item)}
                      >
                        {item.ammount > 1 ? (
                          <AiOutlineMinus />
                        ) : (
                          <AiFillDelete color={currentColor} />
                        )}
                      </button>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                        {item.ammount < 1 ? 1 : item.ammount}
                      </p>
                      <button
                        className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"
                        onClick={() => handlePlusClick(item)}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">${totalPrice}</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">${totalPrice}</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
