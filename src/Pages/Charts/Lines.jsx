import { ChartsHeader, LineChart } from "../../Components";

const Lines = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-8 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Lines;
