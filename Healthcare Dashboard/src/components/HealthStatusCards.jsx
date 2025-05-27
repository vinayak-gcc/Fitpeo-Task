import { ArrowRight } from 'lucide-react'
import { healthData } from '../Data/healthData'

const HealthStatusCards = () => {
  return (
    <div className="space-y-4 mt-6">
      {healthData.map((item) => (
        <div
          key={item.id}
          className={`${item.bgColor} py-3 px-4 md:w-42 font-normal rounded-xl border border-gray-100 transition-all hover:shadow-md`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{item.icon}</span>
            <div>
              <h3 className="font-semibold text-medium text-indigo-800 text-lg">{item.organ}</h3>
            </div>
          </div>

          {/* Date */}
          <div className="mb-4">
            <p className="text-xs font-medium font-sans text-gray-500">Date: {item.date}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`${item.progressColor} h-2 rounded-full transition-all duration-300`}
                style={{ 
                  width: item.status === 'critical' ? '85%' : 
                         item.status === 'good' ? '65%' : '75%' 
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}

      {/* Details  */}
      <div className="text-right flex justify-end flex ">
        <button className="text-[#3734a9] hover:text-blue-700 font-medium text-xs transition-colors">
          Details 
        </button>
        <ArrowRight className='text-[#3734a9] mt-0.5 ml-1' size={14} />


      </div>
    </div>
  )
}

export default HealthStatusCards