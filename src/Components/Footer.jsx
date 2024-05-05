import { useStateContext } from "../Contexts/ContextProvider";

const Footer = () => {
  const { currentColor } = useStateContext();
  return (
    <footer className=" bg-white dark:bg-secondary-dark-bg">
      <p className="dark:text-gray-200 text-2xl text-gray-600 text-center p-4">
        © 2024 All rights reserved by{" "}
        <span
          className="text-2xl font-semibold"
          style={{ color: currentColor }}
        >
          ShopDash.com
        </span>
      </p>
    </footer>
  );
};

export default Footer;
