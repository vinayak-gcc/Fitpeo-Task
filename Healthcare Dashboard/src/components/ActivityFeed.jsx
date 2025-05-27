import React from "react";

const ActivityFeed = () => {
  return (
    <div className="bg-white p-4 mt-2">
      <div className="bg-[#f6faff] rounded-2xl py-3 px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <h2 className="text-xl font-semibold text-gray-900">Activity</h2>
          <p className="text-sm font-normal mt-1  text-gray-400">
            3 appointment on this week
          </p>
        </div>

        {/* Chart Area */}
        <div className="relative">
          <div className="overflow-x-auto">
            {/* Chart Container */}
            <div className="flex justify-between items-end h-30 px-2 min-w-[400px] gap-4">
              {/* Monday */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-20 bg-gray-300 rounded-full"></div>
                  <div className="w-1 h-10 bg-cyan-400 rounded-full"></div>
                  <div className="gap-4 mt-2">
                    <div className="w-1 h-4 bg-gray-300 mb-1 mt-2 rounded-full"></div>
                    <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="w-1 h-6 mt-12 flex items-end bg-gray-300 rounded-full"></div>
                </div>
                <span className="text-xs font-medium text-gray-400 mt-2">
                  Mon
                </span>
              </div>

              {/* Tuesday */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div>
                    <div className="w-1 h-10 mb-1 bg-cyan-400 rounded-full"></div>
                    <div className="w-1 h-10 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="w-1 h-10 bg-indigo-600 rounded-full"></div>
                  <div className="gap-4 mt-2">
                    <div className="w-1 h-4 bg-gray-300 mb-1 mt-2 rounded-full"></div>
                    <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="w-1 h-6 mt-12 flex items-end bg-cyan-400 rounded-full"></div>
                </div>
                <span className="text-xs font-medium text-gray-400 mt-2">
                  Tue
                </span>
              </div>

              {/* Wednesday */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-20 bg-gray-300 rounded-full"></div>
                  <div className="w-1 h-10 bg-gray-300 rounded-full"></div>
                  <div className="gap-4 mt-2">
                    <div className="w-1 h-4 bg-cyan-400 mb-1 mt-2 rounded-full"></div>
                    <div className="w-1 h-4 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="w-1 h-6 mt-12 flex items-end bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400 font-medium mt-2">
                  Wed
                </span>
              </div>

              {/* Thursday */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div>
                    <div className="w-1 h-10 mb-1 bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-10 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="w-1 h-10 bg-cyan-400 rounded-full"></div>
                  <div className="gap-4 mt-2">
                    <div className="w-1 h-4 bg-cyan-400 mb-1 mt-2 rounded-full"></div>
                    <div className="w-1 h-4 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="w-1 h-6 mt-12 flex items-end bg-gray-300 rounded-full"></div>
                </div>
                <span className="text-xs  font-medium text-gray-400 mt-2">
                  Thu
                </span>
              </div>

              {/* Friday */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div>
                    <div className="w-1 h-10 mb-1 bg-cyan-400 rounded-full"></div>
                    <div className="w-1 h-10 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="w-1 h-10 bg-cyan-400 rounded-full"></div>
                  <div className="gap-4 mt-2">
                    <div className="w-1 h-4 bg-gray-300 mb-1 mt-2 rounded-full"></div>
                    <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="w-1 h-6 mt-12 flex items-end bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-xs font-medium text-gray-400 mt-2">
                  Fri
                </span>
              </div>

              {/* Saturday */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-20 bg-gray-300 rounded-full"></div>
                  <div className="w-1 h-10 bg-gray-300 rounded-full"></div>
                  <div className="gap-4 mt-2">
                    <div className="w-1 h-4 bg-cyan-400 mb-1 mt-2 rounded-full"></div>
                    <div className="w-1 h-4 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="w-1 h-6 mt-12 flex items-end bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-xs font-medium text-gray-400 mt-2">
                  Sat
                </span>
              </div>

              {/* Sunday */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-20 bg-gray-300 rounded-full"></div>
                  <div className="w-1 h-10 bg-cyan-400 rounded-full"></div>
                  <div className="gap-4 mt-2">
                    <div className="w-1 h-4 bg-gray-300 mb-1 mt-2 rounded-full"></div>
                    <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="w-1 h-6 mt-12 flex items-end bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-xs font-medium text-gray-400 mt-2">
                  Sun
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
