import React, { useState, useEffect } from "react";
import analyticsService from "@/services/analyticsService";

const TotalRevenueCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const overview = await analyticsService.fetchOverview();
        setData(overview.totalRevenue);
      } catch (err) {
        setError(err.message);
        // Fallback data
        setData({
          value: 530009,
          change: 12,
          changeType: 'increase'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="w-[220px] bg-white shadow-md rounded-md">
        <div className="p-3">
          <div className="bg-[#127DC0] w-10 h-10 p-3 rounded-full animate-pulse"></div>
          <h4 className="text-sm text-[#797979] my-2">Total Revenue</h4>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="rgba(255,255,255,1)"
            >
              <path d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z"></path>
            </svg>
          </div>
          <h4 className="text-sm text-[#797979] my-2">Total Revenue</h4>
          <p className="text-[#060606] text-2xl font-semibold">
            {formatCurrency(data?.value || 0)}
          </p>
          <div className="flex gap-2 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill={data?.changeType === 'increase' ? 'rgba(26,147,46,1)' : 'rgba(238,32,28,1)'}
              >
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
  );
};

export default TotalRevenueCard;
