"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("Last 30 days");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="w-52 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-[#f4f4f4] py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[hover]:text-white data-[open]:bg-gray-700 data-[open]:text-white  data-[focus]:outline-1 data-[focus]:outline-white">
          {selectedOption}
          <ChevronDownIcon className="size-4 fill-black/60 hover:fill-white" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-black/5 bg-black/5 p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button
              onClick={() => handleOptionClick("Last 14 days")}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
            >
              Last 14 days
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => handleOptionClick("Last 7 Days")}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
            >
              Last 7 days
            </button>
          </MenuItem>

          <MenuItem>
            <button
              onClick={() => handleOptionClick("Last 2 days")}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
            >
              Last 2 days
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => handleOptionClick("Last 1 day")}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
            >
              Last 1 day
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
