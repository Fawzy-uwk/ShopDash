import { Header } from "../Components";
import {
  ColumnDirective,
  ColumnsDirective,
  ExcelExport,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Search,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";

const Employees = () => {
  return (
    <div className="md:m-8 p-2 bg-white md:p-8 rounded-3xl ">
      <Header title="Employees" category="Page" />
      <GridComponent
        className="overflow-x-scroll"
        dataSource={employeesData}
        height={500}
        allowPaging
        allowFiltering
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((order, index) => (
            <ColumnDirective key={index} {...order} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, PdfExport, ExcelExport, Search, Sort,Toolbar]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
