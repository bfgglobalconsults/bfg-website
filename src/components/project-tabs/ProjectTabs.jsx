"use client"
import React, { useState } from 'react'

const ProjectTabs = () => {
        const [tab, settab] = useState("All");
    
  return (
      <>
       <div className="my-6">
                              <div className="flex gap-x-[24px] my-4 ">
                    <button
                      onClick={() => {
                        settab("All");
                      }}
                      className={`text-[14px] pb-2 cursor-pointer ${
                        tab === "All"
                          ? "text-white bg-[#E26015] py-2 px-6 rounded-xl"
                          : "text-black border border-[#E26015] py-2 px-6 rounded-xl"
                      } `}
                    >
                      All
                      </button>
                        <button
                      onClick={() => {
                        settab("Technology and Software Development")
                      }}
                      className={`text-[14px] pb-2 cursor-pointer ${
                        tab === "Technology and Software Development"
                          ? "text-white bg-[#E26015] py-2 px-6 rounded-xl"
                          : "text-black border border-[#E26015] py-2 px-6 rounded-xl"
                      } `}
                    >
                    Technology and Software Development
      
      
                      </button>
                    <button
                      onClick={() => {
                        settab("Research and Analytics ");
                      }}
                      className={`text-[14px] pb-2 cursor-pointer ${
                        tab === "Research and Analytics "
                          ? "text-white bg-[#E26015] py-2 px-6 rounded-xl"
                          : "text-black border border-[#E26015] py-2 px-6 rounded-xl"
                      } `}
                    >
                      Research and Analytics
                    </button>
                    <button
                      onClick={() => {
                        settab("Strategy and Operations Transformation")
                      }}
                      className={`text-[14px] pb-2 cursor-pointer ${
                        tab === "Strategy and Operations Transformation"
                          ? "text-white bg-[#E26015] py-2 px-6 rounded-xl"
                          : "text-black border border-[#E26015] py-2 px-6 rounded-xl"
                      } `}
                    >
                     Strategy and Operations Transformation
                      </button>
                     
                       <button
                      onClick={() => {
                        settab("Training and Development")
                      }}
                      className={`text-[14px] pb-2 cursor-pointer ${
                        tab === "Training and Development"
                          ? "text-white bg-[#E26015] py-2 px-6 rounded-xl"
                          : "text-black border border-[#E26015] py-2 px-6 rounded-xl"
                      } `}
                    >
                    Training and Development
                    </button>
                  </div>
                  </div>
      </>
  )
}

export default ProjectTabs