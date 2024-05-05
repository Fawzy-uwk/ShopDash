import { Header } from "../Components";
import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { ordersData, ordersGrid } from "../data/dummy";

const Orders = () => {
  return (
    <div className="md:m-8 h-[100dvh] mt-24 md:mt-0 p-2 bg-white dark:bg-secondary-dark-bg md:p-8 rounded-3xl ">
      <Header title="Orders" category="Page" />
      <GridComponent
        id="gridComp"
        dataSource={ordersData}
        height={500}
        allowPaging
        allowFiltering
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((order, index) => (
            <ColumnDirective key={index} {...order} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            PdfExport,
            ExcelExport,
            Filter,
            Resize,
            Sort,
            ContextMenu,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
