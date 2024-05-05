import { useRef } from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Search,
  Selection,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../Components";
import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
  const gridRef = useRef(null);

  const handleActionBegin = (args) => {
    if (args.requestType === "delete") {
      const deletedRecord = args.data[0];
      if (gridRef.current && gridRef.current.grid) {
        const dataSource = gridRef.current.grid.dataSource;
        const index = dataSource.indexOf(deletedRecord);
        dataSource.splice(index, 1);
      }
    }
  };

  return (
    <div className="md:m-8 mt-24 md:mt-0 p-2 h-[100dvh] bg-white md:p-8 rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        ref={gridRef}
        dataSource={customersData}
        height={500}
        allowPaging
        allowFiltering
        allowSorting
        toolbar={["Search", "Delete"]}
        width="auto"
        editSettings={{ allowDeleting: true, allowEditing: true }}
        actionBegin={handleActionBegin}
      >
        <ColumnsDirective>
          {customersGrid.map((order, index) => (
            <ColumnDirective key={index} {...order} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            PdfExport,
            ExcelExport,
            Filter,
            Search,
            Sort,
            Edit,
            Toolbar,
            Selection,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
