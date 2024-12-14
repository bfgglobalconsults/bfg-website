import React from 'react'

const ProjectsCard = () => {
  return (
      <>
      <div className="w-[220px] bg-white shadow-md rounded-md">
        <div className="p-3">
              <div className="bg-[#127DC0] w-10 h-10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM9 13H4V19H20V13H15V16H9V13ZM20 7H4V11H9V9H15V11H20V7ZM11 11V14H13V11H11ZM9 3V5H15V3H9Z"></path></svg>
              </div>
              <h4 className="text-sm text-[#797979] my-2">Projects</h4>
              <p className="text-[#060606] font-semibold"><span className="text-2xl">95</span>/100</p>
              <div className="flex gap-2 items-center"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(238,32,28,1)"><path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path></svg></span><span className="text-[10px]">12% increase from last month</span></div>
        </div>
        </div>
      </>
  )
}

export default ProjectsCard