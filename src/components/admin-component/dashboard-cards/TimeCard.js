import React from 'react'

const TimeCard = () => {
  return (
      <>
          <div className="w-[220px] bg-white shadow-md rounded-md">
              <div className="p-3">
              <div className="bg-[#127DC0] w-10 h-10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path></svg>
               </div>
              <h4 className="text-sm text-[#797979] my-2">Time Spent</h4>
              <p><span className="text-2xl">1022 </span>/1300 Hrs</p>
              <div className="flex gap-2 items-center"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(26,147,46,1)"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></span><span className="text-[10px]">8% increase from last month</span></div>
      </div>
              </div>
      </>
  )
}

export default TimeCard