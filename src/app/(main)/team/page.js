"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getTeamMembers } from "@/lib/api";
import OurStand from "@/components/OurStand";

const Page = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      setLoading(true);
      const data = await getTeamMembers();
      setTeamMembers(data);
      setLoading(false);
    }
    fetchTeam();
  }, []);

  // Group team members by department
  const groupedTeam = {
    management: teamMembers.filter((m) => m.department === "management"),
    product: teamMembers.filter((m) => m.department === "product"),
    marketing: teamMembers.filter((m) => m.department === "marketing"),
    finance: teamMembers.filter((m) => m.department === "finance"),
    administrative: teamMembers.filter((m) => m.department === "administrative"),
  };

  const TeamMemberCard = ({ member }) => (
    <div className="flex flex-col">
      <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
        <Image
          src={member.profileImage || Avatar}
          alt={member.name}
          width={250}
          height={250}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-[#E45F11]">{member.position}</p>
        <Link href={member.link}>
          <button className="text-[#999] text-cursor text-md underline hover:text-black">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );

  const TeamSection = ({ title, members }) => {
    if (members.length === 0) return null;

    return (
      <>
        <div className="my-8">
          <div className="w-full gap-4 items-center justify-between my-4">
            <h3 className="my-4 text-[#333] font-bold text-4xl md:text-3xl lg:text-4xl mb-8">
              {title}
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
        <hr className="my-8" />
      </>
    );
  };

  return (
    <>
      <div className="lg:mt-[150px] p-12">
        {/* Header section */}
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Our Team
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Meet the brains.
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
            Meet the dedicated team - The passionate builders, creators and
            visionaries behind everything we do.
          </p>
        </div>

        {/* Banner image section */}
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-top">
          <Image
            src="/assets/team-image-banner.jpg"
            alt="about-banner"
            width={1200}
            height={400}
            className="w-full h-full object-cover object-top rounded-3xl"
          />
        </div>

        {/* Team description */}
        <div className="py-[30px]">
          <div className="w-full my-4">
            <p className="text-lg text-[#656565] my-3">
              Our strength lies in our diverse & dynamic team. From seasoned
              industry veterans to fresh perspectives, we unite under a shared
              commitment to excellence. With a passion for innovation & a
              dedication to client success, each member brings a unique set of
              skills & experiences to the table.
            </p>
          </div>
        </div>

        {/* Team members section */}
        <div className="my-8">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Team Members
          </span>

          {loading ? (
            <div className="flex justify-center items-center h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E26015]"></div>
            </div>
          ) : teamMembers.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-[#999] text-lg">No team members available at the moment.</p>
            </div>
          ) : (
            <>
              <TeamSection title="Management Team" members={groupedTeam.management} />
              <TeamSection title="Product Team" members={groupedTeam.product} />
              <TeamSection title="Marketing Team" members={groupedTeam.marketing} />
              <TeamSection title="Finance Team" members={groupedTeam.finance} />
              <TeamSection title="Administrative Team" members={groupedTeam.administrative} />
            </>
          )}
        </div>

        <div className="my-10">
          <OurStand />
        </div>
      </div>
    </>
  );
};

export default Page;
