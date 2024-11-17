"use client";
import { Input } from "@/src/components/ui/input";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import React from "react";
import CountryDropdown from "../Countries";
import TimezoneDropdown from "../Timezone";
import { Button } from "@/src/components/ui/button";

const AccountsScreen = () => {
  return (
    <div>
      <div className="flex justify-between mx-5 mt-10">
        <div>
          <h1 className="font-bold">Personal Info</h1>
          <p className="text-gray-700">
            Update your photo and personal details here.
          </p>
        </div>
        <div className="space-x-3">
          <Button variant="outline" className="border border-gray-300">
            Cancel
          </Button>
          <Button className="bg-[#693EFE]">Save</Button>
        </div>
      </div>
      <div className="border-t border-gray-300 opacity-30 mt-5"></div>
      <SectionComponent name="Name">
        <>
          <Input className="" placeholder="Olivia" />
          <Input className="" placeholder="Rhyne" />
        </>
      </SectionComponent>
      <SectionComponent name="Email Address">
        <div className="col-span-2">
          <Input className="w-full" placeholder="olivia@untitledui.com" />
        </div>
      </SectionComponent>
      <SectionComponent
        name="Your photo"
        sub="This will be displayed on your profile"
      >
        <div className="flex gap-5 col-span-2">
          <div className="mt-4">
            <Image src="/Oli.svg" height={60} width={60} alt="Oli" />
          </div>
          <div className="border-2 rounded-lg px-6 py-4 w-full border-[#693EFE] relative mt-2.5">
            <input type="file" className="absolute opacity-0 h-full w-full" />
            <div className="flex items-center flex-col">
              <div className="border rounded-lg flex items-center justify-center p-2.5 shadow-sm shrink-0 w">
                <UploadCloud size={16.5} color="#475467" />
              </div>
              <div className="mt-3">
                <h2 className="text-[#693EFE] font-semibold text-sm text-center">
                  Click to upload{" "}
                  <span className="text-secondary font-normal ">
                    or drag and drop
                  </span>
                </h2>
                <p className="text-[#693EFE] text-xs font-normal mt-1 text-center">
                  Supported files: Word, PDF, CSV or Excel
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionComponent>
      <SectionComponent name="Country">
        <div className="col-span-2">
          <CountryDropdown />
        </div>
      </SectionComponent>

      <SectionComponent name="Timezone">
        <div className="col-span-2">
          <TimezoneDropdown />
        </div>
      </SectionComponent>

      <div className="space-x-3 flex mt-5 justify-end">
        <Button variant="outline" className="border border-gray-300">
          Cancel
        </Button>
        <Button className="bg-[#693EFE]">Save</Button>
      </div>
    </div>
  );
};

export default AccountsScreen;

function SectionComponent({
  name,
  sub,
  children,
}: {
  name: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 border-b ml-3 py-5 ">
      <div className="col-span-2">
        <div className="">
          <div className="flex gap-2 col-span-1">
            <h1>{name}</h1>
            <h1 className="text-[#693EFE]">*</h1>
          </div>
          {sub && <span className="text-sm text-[#535862]">{sub}</span>}
        </div>
      </div>
      <div className="col-span-4">
        <div className={`grid grid-cols-2 gap-6 `}>{children}</div>
      </div>
    </div>
  );
}
