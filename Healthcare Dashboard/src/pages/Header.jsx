import { useState } from "react";
import {
  Search,
  Plus,
  Menu,
  X,
  LayoutGrid,
  ArrowUpDown,
  CalendarDays,
  SquarePlus,
  TrendingUp,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-white flex items-center justify-between w-full relative">
        {/* Logo*/}
        <div className="pl-2 pt-4   w-1/7 md:w-1/5 lg:w-1/7">
          <div className="py-4 md:bg-[#f6faff] rounded-tl-[35px]">
            <h1 className="text-xl font-bold ml-4 mt-5">
              <div className="text-[#22d8da] ">
                Health<span className="text-indigo-900">care.</span>
              </div>
            </h1>
          </div>
        </div>

        {/* Desktop Verson */}
        <div className="hidden md:flex w-6/7 justify-between">
          {/* Left  */}
          <div className="w-1/2 mt-4">
            <div className="mt-6">
              <div className="flex items-center mx-2 py-2 px-4 rounded-lg placeholder:black border border-gray-200 relative">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full mx-2 border-none placeholder:border-none focus:ring-white focus:outline-none focus:ring-0"
                />
                <FontAwesomeIcon
                  icon={faBell}
                  size="lg"
                  className="text-indigo-800 ml-2"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 lg:bg-[#f6faff] mt-3  flex justify-end mr-2 rounded-tr-[35px]">
            <div className="flex items-center mr-16 mx-2 p-3.5  mt-4 gap-x-3">
              {/* Profile Avatar */}
              <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  <img
                    src="/Images/Person.svg"
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                  />
                </span>
              </div>

              {/* Add Button */}
              <button className="bg-[#3835aa] hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                <Plus size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile - Hamburger Menu */}
        <div className="md:hidden flex items-center mr-4 mt-6">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu*/}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white absolute z-50 overflow-y-auto">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-xl font-bold">
              <div className="text-[#22d8da]">
                Health<span className="text-indigo-800">care.</span>
              </div>
            </h1>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Search Bar and Top Buttons */}
          <div className="p-4 border-b bg-gray-50">
            {/* Search Section */}
            <div className="mb-4">
              <div className="flex items-center py-2 px-4 rounded-lg border border-gray-200 bg-white">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full mx-2 outline-none"
                />
                <FontAwesomeIcon
                  icon={faBell}
                  size="lg"
                  className="text-indigo-700 ml-2"
                />
              </div>
            </div>

            {/* Profile and Add Button */}
            <div className="flex items-center justify-center gap-4">
              {/* Profile Avatar */}
              <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  <img
                    src="/Images/Person.svg"
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                  />
                </span>
              </div>

              {/* Add Button */}
              <button className="bg-[#3835aa] hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar Menu */}
          <div className="p-4">
            {/* General Section */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-400 uppercase tracking-wider mb-6">
                General
              </h3>

              <nav className="space-y-6">
                <div className="flex items-center gap-3 text-blue-600 p-2">
                  <LayoutGrid size={15} />
                  <span className="font-medium">Dashboard</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors">
                  <ArrowUpDown size={15} />
                  <span>History</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                  <CalendarDays size={15} />
                  <span>Calendar</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                  <SquarePlus size={15} />
                  <span>Appointments</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                  <TrendingUp size={15} />
                  <span>Statistics</span>
                </div>
              </nav>
            </div>

            {/* Tools Section */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Tools
              </h3>

              <nav className="space-y-6">
                <div className="flex items-center gap-3 p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                  <MessageCircleMore size={15} />
                  <span>Chat</span>
                </div>

                <div className="flex items-center gap-3 p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                  <Phone size={15} />
                  <span>Support</span>
                </div>
              </nav>
            </div>

            {/* Settings */}
            <div className="mt-auto">
              <div className="flex items-center gap-3 p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                <Settings size={15} />
                <span>Settings</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
