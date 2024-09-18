import Link from 'next/link'
import React from 'react'

const ContactBanner = () => {
  return (
      <>
          <div>
              <div className="w-full h-[600px] relative bg-[url('../../public/assets/contact-banner1.png')] bg-no-repeat bg-cover flex items-center">
                  <div className="p-12 w-[100%] lg:w-[60%]">
                      <h3 className="text-3xl lg:text-5xl font-semibold text-white">Securing Industry Relevance for Individuals & Businesses</h3>
                      <p className="text-white text-xl my-4">Our growth services are designed to help you either as an individual, startup, or SME secure industry relevance.</p>
                      <Link href="/contact">
                      <button className="bg-[#E26015] rounded-3xl hover:bg-[#333] py-3 px-6 text-xl text-white font-semibold">
                          Contact Us
                          </button>
                          </Link>
                    </div>
              </div>
          </div>
      </>
  )
}

export default ContactBanner