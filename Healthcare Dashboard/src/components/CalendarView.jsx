import { ChevronLeft, ChevronRight } from "lucide-react";
import { calendarData } from "../Data/calenderData";
import { appointments } from "../Data/appointments";

const CalendarView = () => {
  return (
    <div className="bg-[#f6faff]  w-full md:-mt-4.5 p-6 text-indigo-800">
      {/*  Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-indigo-800">October 2021</h2>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ChevronLeft size={16} className="text-indigo-800" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ChevronRight size={16} className="text-indigo-800" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto mb-6">
        <div className="min-w-[600px] md:min-w-[400px] grid grid-cols-7 mt-2  gap-3">
          {calendarData.map((day, index) => (
            <div
              key={index}
              className={`text-center ${
                day.day === "Tues" ? "bg-indigo-100 rounded-xl -mt-2 p-2" : ""
              }`}
            >
              {/* Day  */}
              <div
                className={`text-sm mb-2 font-medium ${
                  day.day === "Sun" ? "text-gray-400" : "text-indigo-800"
                }`}
              >
                {day.day}
              </div>

              {/* Date */}
              <div
                className={`text-lg font-bold mb-2 ${
                  day.day === "Sun" ? "text-gray-400" : "text-indigo-800"
                }`}
              >
                {day.date}
              </div>

              {/* Appointments */}
              <div className="space-y-1">
                {day.appointments.map((time, timeIndex) => {
                  // Styling for highlighted appointments
                  const isHighlighted = day.date === 26 && time === "09:00";

                  const isSpecialHighlight =
                    (day.date === 30 && time === "12:00") ||
                    (day.date === 31 && time === "09:00") ||
                    (day.date === 28 && time === "11:00");

                  if (time === "—") {
                    return (
                      <div
                        key={timeIndex}
                        className="text-sm py-2 text-indigo-800"
                      >
                        —
                      </div>
                    );
                  }

                  return (
                    <div
                      key={timeIndex}
                      className={`text-xs px-3 py-2 rounded-lg font-medium flex flex-col items-center justify-center ${
                        isHighlighted
                          ? "bg-indigo-800 text-white"
                          : isSpecialHighlight
                          ? "bg-gray-300 text-indigo-900"
                          : ""
                      } ${day.day === "Sun" ? "text-gray-400" : ""}`}
                    >
                      {time}
                      {(isHighlighted || isSpecialHighlight) && (
                        <div className="w-1 h-1 flex flex-col bg-white rounded-full"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Cards */}
      <div className="flex flex-col -mt-2 md:flex-row gap-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className={`${appointment.bgColor} ${appointment.textColor} p-4 rounded-3xl flex items-start gap-3`}
          >
            <div className="w-full">
              <div className="flex justify-between mb-2 md:mb-0 items-center">
                <h3 className="font-semibold mb-1">{appointment.type}</h3>
                <div className="ml-6 flex justify-end">{appointment.icon}</div>
              </div>
              <p className="text-sm mb-1">{appointment.time}</p>
              <p className="text-sm">{appointment.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
