import React from 'react'

export const AboutComponent = () => {
  return (
    <>
    <div>
        <div className="w-full flex gap-8">
            <div className="w-[20%]"><h3 className="text-2xl text-white font-semibold my-3">About us</h3>
            <p className="text-white text-lg">
              BFG Global Consulting, LLC. ediﬁes your business and organisation to growth. We are at the intersection of research, strategy, workforce training, and information technology.
 
            </p>
            <button className="my-8 px-6 py-4 border-2 border-white text-lg font-semibold">
              Explore
            </button>
                 
            </div>
            <div className="w-[40%]">
              <p className="text-lg py-4 mx-4 border-t border-b border-white font-semibold">Who we are</p>
              <p className="text-lg py-4 mx-4  font-semibold">Our people</p>
<p className="text-lg py-4 mx-4 border-t  border-white font-semibold">Our clients</p>
<p className="text-lg py-4 mx-4 border-t border-b border-white font-semibold">Our Solutions</p>

            </div>
            <div className="w-[40%]"></div>
        </div>
    </div>
    </>
  )
}
