import { Header } from "../Components";
import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";

const Calender = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 mt-28 bg-white rounded-3xl">
      <Header category="App" title="Schedules" />
      <ScheduleComponent
        height="700px"
        eventSettings={{ dataSource: scheduleData }}
      >
        <Inject
          services={[Day, Week, Month, Agenda, WorkWeek, DragAndDrop, Resize]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calender;
