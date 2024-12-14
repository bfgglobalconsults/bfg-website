import React from "react";

const TotalRevenueCard = () => {
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
          <p className="text-[#060606] text-2xl font-semibold">N530,009.00</p>
          <div className="flex gap-2 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="rgba(26,147,46,1)"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </span>
            <span className="text-[10px]">12% increase from last month</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalRevenueCard;
