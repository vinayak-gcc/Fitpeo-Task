
const SimpleAppointmentCard = ({ title, time, icon}) => {
  return (
    <div className="  bg-[#dde2f9] py-4 px-4 rounded-2xl flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex-1  text-indigo-900">

      <div className='flex justify-between items-center mb-1 md:mb-0'>
        <h3 className="font-semibold mb-1">{title}</h3>
          <div className=" text-lg ml-6">
         {icon}
         </div>
      </div>

        <p className="text-sm ">{time}</p>
      </div>
    
    </div>
  )
}

export default SimpleAppointmentCard