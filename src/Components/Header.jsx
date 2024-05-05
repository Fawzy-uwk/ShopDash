import { useStateContext } from "../Contexts/ContextProvider";

/*eslint-disable react/prop-types*/
const Header = ({ category, title }) => {
  const { currentColor } = useStateContext();
  return (
    <div className="mb-6">
      <p className="text-gray-500">{category}</p>
      <p
        className="font-semibold text-3xl mb-4"
        style={{ color: currentColor }}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;
