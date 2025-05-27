import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import CalenderView from "./CalendarView";
import UpComingSchedule from "./UpcomingSchedule";
import { ChevronDown } from "lucide-react";

const DashboardOverview = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row pr-2  ">
        <div className=" lg:w-1/2">
          <div className="">
        
            <div className="px-4 py-2 bg-white ml-2 md:ml-10 text-blue-700 mb-2  flex items-center justify-between">
              <div className=" text-xl font-medium text-[#3734a9]">
                Dashboard
              </div>

              <div className="flex font-medium text-xs -mt-1 items-center text-[#3734a9]">
                <div> This Week</div>
                <div>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row overflow-x-auto  w-auto justify-between mx-4">
            
            <div className="w-full flex flex-col  md:flex-row ">
            
            <div className=" md:w-2/3">
              <AnatomySection />
              </div>

              <div className="md:w-1/3">
              <HealthStatusCards />
              </div>

              </div>
            </div>
          </div>

          <ActivityFeed />
        </div>

        <div className=" lg:w-1/2  mb-2 rounded-br-[35px] ">
          <CalenderView  />
          <UpComingSchedule />
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
