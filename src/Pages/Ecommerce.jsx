// import { Pie } from "../Components";
// import Button from "../Components/Button";
// import SparkLine from "../Components/Charts/SparkLine";
// import Stacked from "../Components/Charts/Stacked";
// import { useStateContext } from "../Contexts/ContextProvider";
// import {
//   SparklineAreaData,
//   earningData,
//   ecomPieChartData,
//   stackedChartData,
// } from "../data/dummy";
// import { GoDotFill } from "react-icons/go";

// const Ecommerce = () => {
//   const { currentColor } = useStateContext();

//   // Initialize a variable to hold the total amount
//   let totalAmount = 0;

//   // Iterate through each object in the earningData array
//   earningData.forEach((item) => {
//     // Remove commas from the amount and convert it to a number
//     const amount = Number(item.amount.replace(/,/g, ""));

//     // Add the amount to the total
//     totalAmount += amount;
//   });
//   const formattedTotalAmount = totalAmount.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
//   return (
//     <div>
//       <div className="mt-12 lg:min-h-[110vh] h-[195dvh]">
//         <div className="flex flex-wrap lg:flex-nowrap justify-center ">
//           <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-[80%] p-6 pt-10 m-3 bg-no-repeat bg-hero-pattern bg-conver bg-center">
//             <div className="flex justify-between flex-col flex-wrap">
//               <div>
//                 <p>Earnings:</p>
//                 <p>$200,488.584</p>
//               </div>

//               <div className="mt-4">
//                 <Button
//                   color="white"
//                   bgColor={currentColor}
//                   text="Download"
//                   borderRadius="10px"
//                   size="md"
//                 />
//               </div>
//             </div>

//             <div className="mt-16 flex items-center justify-center  gap-4 flex-wrap ">
//               {earningData.map((earning) => (
//                 <div
//                   key={earning.title}
//                   className="bg-white  dark:text-light-gray dark:bg-secondary-dark-bg p-6 rounded-lg w-full md:w-60"
//                 >
//                   <button
//                     style={{
//                       color: earning.iconColor,
//                       background: earning.iconBg,
//                     }}
//                     className="p-3 text-2xl opacity-[.9] hover:drop-shadow-xl mb-2 rounded-full"
//                   >
//                     {earning.icon}
//                   </button>

//                   <div className="flex gap-4 items-center">
//                     <p className="text-lg font-semibold">{earning.amount}</p>{" "}
//                     <span
//                       className={
//                         earning.percentage.includes("+")
//                           ? "text-green-400"
//                           : "text-red-600"
//                       }
//                     >
//                       {earning.percentage}
//                     </span>
//                   </div>

//                   <span>{earning.title}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex gap-10 flex-wrap justify-center bg-none mt-8">
//               <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
//                 <div className="flex justify-between">
//                   <p className="font-semibold text-xl">Revenue Updates</p>
//                   <div className="flex items-center text-gray-600 hover:drop-shadow-xl gap-4">
//                     <p className="flex items-center gap-1">
//                       <span>
//                         <GoDotFill />
//                       </span>
//                       <span className="capitalize">expense</span>
//                     </p>

//                     <p className="flex items-center gap-1 text-green-500">
//                       <span>
//                         <GoDotFill />
//                       </span>
//                       <span className="capitalize">Budget</span>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-8 flex justify-center gap-12 flex-wrap ">
//                   <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
//                     <div className="border-r-1 border-color m-4 pr-10 ">
//                       <div className="mb-8">
//                         <p className="">
//                           <span className="text-slate-800 dark:text-slate-200 font-semibold text-4xl mr-2">
//                             {new Intl.NumberFormat("en-US", {
//                               style: "currency",
//                               currency: "USD",
//                             }).format(
//                               SparklineAreaData.reduce(
//                                 (sum, item) => sum + item.y,
//                                 0
//                               )
//                             )}
//                           </span>
//                           <span className="p-1 bg-green-400 rounded-full text-gray-50 text-sm">
//                             +27%
//                           </span>
//                         </p>
//                         <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
//                           Budget
//                         </p>
//                       </div>

//                       <div>
//                         <p className="">
//                           <span className="text-slate-800 font-semibold dark:text-slate-200 text-4xl mr-2">
//                             {new Intl.NumberFormat("en-US", {
//                               style: "currency",
//                               currency: "USD",
//                             }).format(
//                               stackedChartData[1].reduce(
//                                 (sum, item) => sum + item.y,
//                                 0
//                               ) * 100
//                             )}
//                           </span>
//                         </p>
//                         <p className="text-sm text-gray-600 mt-2 dark:text-gray-400">
//                           Expense
//                         </p>
//                       </div>

//                       <div className="mt-4">
//                         <SparkLine
//                           currentColor={currentColor}
//                           id="line-sparkLine"
//                           type="Line"
//                           height="80px"
//                           width="250px"
//                           data={SparklineAreaData}
//                           color={currentColor}
//                         />

//                         <div className="mt-4">
//                           <Button
//                             color="white"
//                             bgColor={currentColor}
//                             text="Download Report"
//                             borderRadius="10px"
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-8">
//                       <Stacked width="320px" height="340px" />
//                     </div>
//                   </div>

//                   <div className="">
//                     <div
//                       className="p-4 md:w-400 rounded-md "
//                       style={{ background: currentColor }}
//                     >
//                       <div className="flex  justify-between">
//                         <h3 className="text-slate-100 text-3xl font-semibold">
//                           Earnings
//                         </h3>
//                         <div>
//                           <span className="text-gray-100 text-2xl font-semibold">
//                             {formattedTotalAmount}
//                           </span>
//                           <p className="text-gray-300 text-sm">
//                             Monthly Revenue
//                           </p>
//                         </div>
//                       </div>

//                       <div className="mt-4">
//                         <SparkLine
//                           currentColor="white"
//                           id="column-sparkLine"
//                           height="100px"
//                           type="Column"
//                           data={SparklineAreaData}
//                           width="320"
//                           color="rgb(242, 252, 253)"
//                         />
//                       </div>
//                     </div>

//                     <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400  flex justify-center items-center gap-10">
//                       <div>
//                         <p className="text-2xl font-semibold ">$43,246</p>
//                         <p className="text-gray-400">Yearly sales</p>
//                       </div>

//                       <div className="w-40">
//                         <Pie
//                           id="pie-chart"
//                           data={ecomPieChartData}
//                           legendVisiblity={false}
//                           height="160px"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ecommerce;

import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../Components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../Contexts/ContextProvider";
import product9 from "../data/product9.jpg";

/*eslint-disable react/prop-types */
const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  //  Initialize a variable to hold the total amount
  let totalAmount = 0;

  // Iterate through each object in the earningData array
  earningData.forEach((item) => {
    // Remove commas from the amount and convert it to a number
    const amount = Number(item.amount.replace(/,/g, ""));

    // Add the amount to the total
    totalAmount += amount;
  });
  const formattedTotalAmount = totalAmount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="mt-24">
      <div className="flex flex-wrap justify-center items-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-48  rounded-xl w-full lg:w-[80%] p-6 pt-10 m-3 bg-no-repeat bg-hero-pattern bg-conver bg-center">
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold text-gray-800 md:text-normal text-2xl md:text-gray-400">Earnings</p>
              <p className="text-4xl">{formattedTotalAmount}</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>

        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">
                  {formattedTotalAmount}
                </p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <Pie
                id="pie-chart"
                data={ecomPieChartData}
                legendVisiblity={false}
                height="160px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">{recentTransactions.length} Recent Transactions</p>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div
                key={item.title}
                className="flex justify-between mt-4 w-full"
              >
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="area-sparkLine"
                height="160px"
                type="Area"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>
        </div>

        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">MedicalPro Branding</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-400"
            >
              <IoIosMore />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            16 APR, 2021
          </p>

          <div className="flex gap-4 border-b-1 border-color mt-6">
            {medicalproBranding.data.map((item) => (
              <div
                key={item.title}
                className="border-r-1 border-color pr-4 pb-2"
              >
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md font-semibold mb-2">Leaders</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <img
                  key={index}
                  className="rounded-full w-8 h-8"
                  src={item.image}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img className="md:w-96 h-50 " src={product9} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
