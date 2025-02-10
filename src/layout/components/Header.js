import React from "react";
import Profile from "../../../public/assets/profile.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/auth/authSlice";

const Header = () => {
  const currentuser = useSelector(selectCurrentUser);
  const pathname = usePathname();
  const currentPath = pathname?.split("/").pop() || "Dashboard";

  return (
    <>
      <div className="shadow-lg w-full h-[100px] p-3 px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="capitalize font-semibold">{currentPath}</h2>
          </div>

          <div className="flex gap-3">
            <span className="p-3 cursor-pointer rounded-full border border-[#E2E8F9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(226,96,21,1)"
              >
                <path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z"></path>
              </svg>
            </span>
            <div className="w-[40px] h-[40px]">
              <Image
                src={Profile}
                className="rounded-full w-full h-full"
                alt="profile-img"
              />
            </div>
            <div>
              <p>{currentuser.fullname}</p>
              <span>{currentuser.role}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
