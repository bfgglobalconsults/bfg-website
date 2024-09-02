import React from 'react'

const ContactBanner = () => {
  return (
      <>
          <div>
              <div className="w-full h-[600px] relative bg-[url('../../public/assets/contact-banner.png')] bg-no-repeat bg-cover flex items-center">
                  <div className="p-12 w-[100%] lg:w-[60%]">
                      <h3 className="text-5xl font-semibold text-[#333]">Securing Industry Relevance for Individuals & Businesses</h3>
                      <p className="text-[#999] text-xl my-4">Our growth services are designed to help you either as an individual, startup, or SME secure industry relevance.</p>
                      <button className="bg-[#E26015] rounded-3xl hover:bg-[#333] py-3 px-6 text-xl text-white font-semibold">
                          Contact Us
                      </button>
                    </div>
              </div>
          </div>
      </>
  )
}

export default ContactBanner