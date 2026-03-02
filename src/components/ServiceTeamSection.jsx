"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getTeamMembers } from "@/lib/api";

export default function ServiceTeamSection({ department = "product" }) {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      setLoading(true);
      const data = await getTeamMembers(null, department);
      setTeamMembers(data);
      setLoading(false);
    }
    fetchTeam();
  }, [department]);

  return (
    <div className="my-14">
      {/* Header */}
      <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
        Engage Our Service Team
      </span>
      <div>
        <h3 className="text-[#333] text-3xl my-8 font-semibold">
          Meet Our Technology & Software Development Team
        </h3>
        <p className="text-[#999] text-xl my-2">
          Discover the experts behind our solutions. Our dedicated team brings a
          wealth of experience and a passion for driving success, ensuring we
          meet our clients&apos; unique challenges with precision and insight.
        </p>
      </div>

      {/* Team Members */}
      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E26015]"></div>
        </div>
      ) : teamMembers.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-[#999] text-lg">
            No team members available at the moment.
          </p>
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col group">
              <div className="w-full aspect-square bg-[#B0D4EA] rounded-lg overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={member.profileImage || "/assets/new-avatar.png"}
                  alt={member.name}
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg transition-shadow duration-300 group-hover:shadow-xl">
                <h3 className="font-semibold text-lg text-[#333]">
                  {member.name}
                </h3>
                <p className="text-[#E45F11] text-sm my-2">{member.position}</p>
                <Link href={member.link}>
                  <button className="text-[#999] text-sm underline hover:text-[#E26015] transition-colors">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Office Addresses */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Nigeria Office */}
        <div className="bg-gradient-to-br from-[#F7F7F8] to-white p-8 rounded-2xl shadow-lg border border-[#E5E5E5] hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-[#E26015] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#333] mb-2">
                Nigeria Office
              </h4>
              <p className="text-[#666] leading-relaxed">
                BFG Place, Road B3, House 6, Pentville Estate,
                <br />
                Lokogoma, FCT, Abuja
              </p>
              <a
                href="tel:+2348184165533"
                className="flex items-center gap-2 text-[#E26015] hover:text-[#333] mt-3 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                </svg>
                +234 818 416 5533
              </a>
            </div>
          </div>
          <Link href="/">
            <button className="w-full mt-4 py-3 px-6 bg-[#E26015] hover:bg-[#333] text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              Visit Nigeria Site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </div>

        {/* UK Office */}
        <div className="bg-gradient-to-br from-[#F7F7F8] to-white p-8 rounded-2xl shadow-lg border border-[#E5E5E5] hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-[#E26015] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#333] mb-2">
                United Kingdom Office
              </h4>
              <p className="text-[#666] leading-relaxed">
                BFG Place, 12 Oxford Street, Margate,
                <br />
                Kent CT9 1TD
              </p>
              <a
                href="tel:+447551107100"
                className="flex items-center gap-2 text-[#E26015] hover:text-[#333] mt-3 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                </svg>
                +44 7551 107100
              </a>
            </div>
          </div>
          <Link href="/uk">
            <button className="w-full mt-4 py-3 px-6 bg-[#E26015] hover:bg-[#333] text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              Visit UK Site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
