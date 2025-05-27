import {
  LayoutGrid,
  ArrowUpDown,
  CalendarDays,
  SquarePlus,
  ChartSpline,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <div className="pl-2 h-full hidden md:block pb-2 text-xs lg:text-sm ">
        <div className="h-full rounded-bl-[35px]  bg-[#f6faff] p-4 flex flex-col">
          {/* General  */}
          <div className="mb-8 ">
            <h3 className=" font-semibold text-gray-400 uppercase tracking-wider mb-6">
              General
            </h3>

            <nav className="space-y-6 ">
              <div className="flex items-center gap-3  cursor-pointer  text-indigo-800">
                <LayoutGrid size={15} />
                <span className="font-medium">Dashboard</span>
              </div>

              <div className="flex items-center gap-3  text-gray-600 hover:bg-gray-100 hover:p-2 rounded-lg cursor-pointer">
                <ArrowUpDown size={15} />
                <span>History</span>
              </div>

              <div className="flex items-center gap-3  text-gray-600  hover:p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <CalendarDays size={15} />
                <span>Calendar</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600  hover:p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <SquarePlus size={15} />
                <span>Appointments</span>
              </div>

              <div className="flex items-center gap-3  text-gray-600   hover:p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <ChartSpline size={15} />
                <span>Statistics</span>
              </div>
            </nav>
          </div>

          {/* Tools  */}
          <div className="mb-8 ">
            <h3 className=" font-semibold text-gray-400 uppercase  tracking-wider mb-4">
              Tools
            </h3>

            <nav className="space-y-6">
              <div className="flex items-center gap-3  hover:p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                <MessageCircleMore size={15} />
                <span>Chat</span>
              </div>

              <div className="flex items-center gap-3  hover:p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Phone size={15} />
                <span>Support</span>
              </div>
            </nav>
          </div>

          {/* Settings  */}
          <div className="mt-auto">
            <div className="flex items-center gap-3  hover:p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Settings size={15} />
              <span>Setting</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
