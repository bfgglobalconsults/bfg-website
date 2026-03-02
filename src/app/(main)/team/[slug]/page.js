"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getTeamMemberBySlug } from "@/lib/api";

const TeamMemberDetail = () => {
  const params = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMember() {
      if (!params.slug) return;
      
      setLoading(true);
      setError(false);
      
      const data = await getTeamMemberBySlug(params.slug);
      
      if (data) {
        setMember(data);
      } else {
        setError(true);
      }
      
      setLoading(false);
    }
    
    fetchMember();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E26015]"></div>
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-[#333] mb-4">Team Member Not Found</h2>
          <p className="text-[#999] text-lg mb-8">
            The team member you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/team">
            <button className="bg-[#E26015] hover:bg-[#222] text-white py-3 px-6 rounded-3xl">
              Back to Team
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="lg:mt-[150px] p-12">
        {/* Back to Team */}
        <div className="pb-9">
          <Link href="/team">
            <div className="flex gap-2 items-center cursor-pointer">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(153,153,153,1)"
                >
                  <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                </svg>
              </span>
              <span className="text-[#999]">Back to Our Team</span>
            </div>
          </Link>
        </div>

        {/* Team Member Badge */}
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Team Members
        </span>

        {/* Member Name */}
        <div className="my-4">
          <h3 className="text-3xl font-semibold my-8">{member.name}</h3>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row w-[100%] gap-8 my-8">
          {/* Left Column - Profile Image and Contact */}
          <div className="w-[100%] lg:w-[20%]">
            <div className="flex flex-col">
              <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                {member.profileImage ? (
                  <Image
                    src={typeof member.profileImage === 'string' ? member.profileImage : member.profileImage.url}
                    alt={member.name}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src="/assets/new-avatar.png"
                    alt={member.name}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-[#E45F11]">{member.position}</p>
                {member.department && (
                  <p className="text-sm text-[#999] mt-1 capitalize">
                    {member.department.replace("-", " ")} Team
                  </p>
                )}
              </div>
            </div>

            {/* Get in Touch Button */}
            {member.email && (
              <div className="my-8">
                <a href={`mailto:${member.email}`}>
                  <button className="w-full flex justify-center gap-4 p-3 border border-[#E26015] hover:bg-[#E26015] hover:text-white rounded-md transition-colors">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                      </svg>
                    </span>
                    <span>Get in Touch</span>
                  </button>
                </a>
              </div>
            )}

            {/* Social Links */}
            {(member.linkedIn || member.twitter) && (
              <div className="flex gap-3 mt-4">
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-3 bg-[#0077B5] hover:bg-[#005885] rounded-lg text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                    </svg>
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-3 bg-[#000000] hover:bg-[#333333] rounded-lg text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right Column - About Content */}
          <div className="w-[100%] lg:w-[80%]">
            <h4 className="text-xl font-semibold mb-6">About {member.name.split(" ")[0]}</h4>

            {/* Bio */}
            {member.bio ? (
              typeof member.bio === 'string' ? (
                <div
                  className="text-[#999] text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: member.bio }}
                />
              ) : (
                <div className="text-[#999] text-lg leading-relaxed space-y-4">
                  {member.bio.root?.children?.map((node, index) => {
                    if (node.type === 'paragraph') {
                      return (
                        <p key={index}>
                          {node.children?.map((child, childIndex) => {
                            if (child.type === 'text') {
                              return <span key={childIndex}>{child.text}</span>;
                            }
                            return null;
                          })}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              )
            ) : member.shortBio ? (
              <p className="text-[#999] text-lg leading-relaxed">
                {member.shortBio}
              </p>
            ) : null}

            {/* Expertise */}
            {member.expertise && member.expertise.length > 0 && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#F7F7F8] text-[#333] text-sm rounded-full"
                    >
                      {item.area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {member.achievements && member.achievements.length > 0 && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {member.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#E26015] mt-1">•</span>
                      <span className="text-[#999] text-lg">{item.achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Info */}
            {(member.phone) && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                <div className="space-y-3">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-3 text-[#999] hover:text-[#E26015]"
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
                      {member.phone}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
