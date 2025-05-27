import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FaSearchPlus } from "react-icons/fa";
import { ScanLine } from "lucide-react";

const AnatomySection = () => {
  return (
    <div className="relative   ">
      {/* Search Icon */}
      <div className="absolute top-4 z-20 right-8 2xl:right-14">
        <FaSearchPlus className="text-gray-600 scale-120" />
      </div>

      {/* Anatomy Section */}
      <div className="flex 2xl:justify-center h-full relative">
        <div className="bg-[#3734a9] gap-2  flex absolute p-2 rounded-lg scale-75 top-22 lg:top-32 xl:top-22 z-20 md:right-14 lg:right-2">
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            className="text-red-600 ml-2"
          />
          <p className="text-white">Healthy Heart</p>
        </div>
        <div className="bg-[#02e2f1] gap-2 p-2 flex items-center rounded-lg absolute scale-75 top-[17rem] z-20 -left-4 2xl:left-8">
          <p className="scale-110">🦵</p>
          <p className="text-indigo-800">Healthy Leg</p>
        </div>

        {/* Leg Scan */}
        <ScanLine className=" absolute scale-150 z-20 ml-[7rem]  2xl:-ml-[2.5rem] mt-[17rem] text-blue-600 " />
        {/* Heart Scan */}
        <ScanLine className=" absolute scale-150 z-20 ml-[10rem]  2xl:ml-[2.5rem] mt-[6rem] text-blue-600 " />

        <div className="w-72 relative z-0 h-96 rounded-2xl ">
          <img
            src="/Images/Anatomy.jpg"
            alt="Anatomy Illustration"
            className="relative z-20 flex  w-74 h-114 -mt-6 scale-85 "
          />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
