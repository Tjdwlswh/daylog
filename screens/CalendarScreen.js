import React, { useContext, useState, useMemo } from "react";
import { format } from "date-fns";
import CalendarView from "../components/CalendalView";
import LogContext from "../contexts/LogContext";
import FeedList from "../components/FeedList";

function CalendarScreen() {
  const { logs } = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  console.log("안녕2", selectedDate);

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), "yyyy-MM--dd");
        console.log(acc, formattedDate);
        acc[formattedDate] = { marked: true };
        return acc;
      }, {}),
    [logs]
  );

  const filteredLogs = logs.filter(
    (log) => format(new Date(log.date), "yyyy-MM-dd") === selectedDate
  );

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          markedDates={markedDates}
        />
      }
    />
  );
}

export default CalendarScreen;
