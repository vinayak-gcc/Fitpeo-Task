import Sidebar from "./pages/Sidebar";
import Header from "./pages/Header";
import DashboardMainContent from "./pages/DashboardMainContent";

function App() {
  return (
    <>
      <div className="App">
        <div className=" my-4  max-w-[1440px] mx-auto xl:px-0 overflow-hidden font-medium rounded-[40px] bg-white shadow-lg ">
          <div className="">
            <Header />
          </div>

          <div className="flex  flex-col md:flex-row w-full">
            <div className=" md:w-1/5 lg:w-1/7">
              <Sidebar />
            </div>

            <div className="md:w-6/7">
              <DashboardMainContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
