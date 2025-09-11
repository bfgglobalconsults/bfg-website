import React, { useState, useEffect } from 'react'
import analyticsService from "@/services/analyticsService";

const TimeCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const overview = await analyticsService.fetchOverview();
        setData(overview.totalTimeSpent);
      } catch (err) {
        setError(err.message);
        // Fallback data
        setData({
          value: 1022,
          change: 8,
          changeType: 'increase'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-[220px] bg-white shadow-md rounded-md">
        <div className="p-3">
          <div className="bg-[#127DC0] w-10 h-10 p-3 rounded-full animate-pulse"></div>
          <h4 className="text-sm text-[#797979] my-2">Time Spent</h4>
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse mt-2"></div>
        </div>
      </div>
    );
  }

  return (
      <>
          <div className="w-[220px] bg-white shadow-md rounded-md">
              <div className="p-3">
              <div className="bg-[#127DC0] w-10 h-10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path></svg>
               </div>
              <h4 className="text-sm text-[#797979] my-2">Time Spent</h4>
              <p>
                <span className="text-2xl">{data?.value || 0}</span>
                <span className="text-lg text-gray-500">/{Math.ceil((data?.value || 0) * 1.3)} Hrs</span>
              </p>
              <div className="flex gap-2 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill={data?.changeType === 'increase' ? 'rgba(26,147,46,1)' : 'rgba(238,32,28,1)'}>
                    <path d={data?.changeType === 'increase' 
                      ? "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                      : "M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"
                    }></path>
                  </svg>
                </span>
                <span className="text-[10px]">
                  {Math.abs(data?.change || 0)}% {data?.changeType || 'increase'} from last month
                </span>
              </div>
      </div>
              </div>
      </>
  )
}

export default TimeCard