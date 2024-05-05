import { Header } from "../Components";
import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";

const Kanban = () => {
  return (
    <div className="m-2 h-[100dvh] md:m-10 p-2 md:p-10 mt-28 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        dataSource={kanbanData}
        id="kanban"
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
