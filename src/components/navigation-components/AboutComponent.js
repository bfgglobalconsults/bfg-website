import { about_links } from "@/constants/aboutcomponent-constant";
import Link from "next/link";
import React from "react";

export const AboutComponent = ({ closeModal, color }) => {
  return (
    <>
      <div>
        <div className="w-full flex gap-8">
          <div className="w-[20%]">
            <h3 className="text-2xl text-white font-semibold my-3">About us</h3>
            <p className="text-white text-lg">
              BFG Global Consulting, LLC. ediﬁes your business and organisation
              to growth. We are at the intersection of research, strategy,
              workforce training, and information technology.
            </p>
            
              <Link href="/about">
              <button onClick={closeModal} className="my-8 px-6 py-4 border-2 border-white text-lg font-semibold">
                Explore
                </button>

                </Link>
          </div>
          <div className="w-[40%]">
            {about_links.map(({id, label, link}) =>(
              <>
              <Link key={id} href={link}>
              <p className={`mx-4 py-4 border-t border-b border-white text-lg font-semibold ${color ? `hover:bg-white hover:text-${color}` : ''}`}>
                {label}
                </p>
                </Link>
                </>
            ))}
            {/* <p className="text-lg py-4 mx-4 border-t border-b border-white font-semibold hover:bg-white hover:text-transparent">
              Who we are
            </p>
            <p className="text-lg py-4 mx-4  font-semibold">Our people</p>
            <p className="text-lg py-4 mx-4 border-t  border-white font-semibold">
              Our clients
            </p>
            <p className="text-lg py-4 mx-4 border-t border-white font-semibold">
              Awards & Recognition
            </p>
            <p className="text-lg py-4 mx-4 border-t border-b border-white font-semibold">
              Governance & Culture
            </p> */}
          </div>
          <div className="w-[40%]"></div>
        </div>
      </div>
    </>
  );
};
