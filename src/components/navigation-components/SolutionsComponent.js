import Link from 'next/link'
import React from 'react'

const SolutionsComponent = ({ closeModal }) => {
  return (
    <>
      <div>
        <div className="w-full flex gap-8">
          <div className="w-[20%]">
            <h3 className="text-2xl text-white font-semibold my-3">
              Solutions
            </h3>
            <p className="text-white text-lg">
            With expertise in research and analytics, business strategy and operations, training and development, and information technology, we empower companies to thrive in todays dynamic business landscape.

            </p>
            <button onClick={closeModal} className="my-8 px-6 py-4 border-2 border-white text-lg font-semibold hover:text-black hover:border-black">
              Explore
            </button>
          </div>
          <div className="w-[40%]">
            <p onClick={closeModal} className="text-lg py-4 mx-4 border-t border-b border-white font-semibold hover:text-black">
            <Link href="/solutions/research-analytics">
Research and Analytics
</Link>
            </p>
            <p onClick={closeModal} className="text-lg py-4 mx-4  font-semibold hover:text-black">
            <Link href="/solutions/business-strategy">
Business strategy and operations 
</Link>
            </p>
            <p onClick={closeModal} className="text-lg py-4 mx-4 border-t  border-white font-semibold hover:text-black">
            <Link href="/solutions/training-development">Training and Development </Link>
            </p>
            <p onClick={closeModal} className="text-lg py-4 mx-4 border-t border-b border-white font-semibold hover:text-black">
              <Link href="/solutions/information-technology">
 Innovation and Technology
</Link>
            </p>
           
          </div>
          <div className="w-[40%]">
            <h3 className="text-2xl text-white font-semibold my-3">
              Projects
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default SolutionsComponent