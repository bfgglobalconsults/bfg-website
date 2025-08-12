import Link from 'next/link'
import React from 'react'

const ContactBanner = () => {
  return (
      <>
          <div>
              <div className="w-full h-[600px] relative bg-[url('../../public/assets/contact-banner1.png')] bg-no-repeat bg-cover flex items-center">
                  <div className="p-12 w-[100%] lg:w-[60%]">
                      <h3 className="text-3xl lg:text-5xl font-semibold text-white leading-tight">Securing Industry Relevance for Every African Business, Everywhere</h3>
                      <p className="text-white text-xl my-4">Our solutions position African startups and SMEs both at home and in the diaspora at the vanguard of Africa&apos;s new industrialisation era, leaving no one behind.</p>
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