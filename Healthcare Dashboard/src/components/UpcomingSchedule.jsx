import SimpleAppointmentCard from './SimpleAppointmentCard'
import { scheduleData } from '../Data/scheduleData'

const UpcomingSchedule = () => {
  return (
    <div className="bg-[#f6faff]  pb-6 px-6 pb-2 ">
      {/* Header */}
      <h2 className="text-xl font-semibold font-semibold text-indigo-800 mb-6">
        The Upcoming Schedule
      </h2>

      {/* Schedule */}
      <div className="space-y-6">
        {scheduleData.map((daySchedule, dayIndex) => (
          <div key={dayIndex}>
            {/* Day */}
            <h3 className="text-md font-normal  text-gray-500 mb-3">
              {daySchedule.day}
            </h3>
            
            {/* Appointments */}
            <div className="flex flex-col md:flex-row gap-3 ">
              {daySchedule.appointments.map((appointment) => (
                <SimpleAppointmentCard
                  key={appointment.id}
                  title={appointment.title}
                  time={appointment.time}
                  icon={appointment.icon}
                  bgColor={appointment.bgColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingSchedule