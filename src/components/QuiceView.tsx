"use client";
import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { navigation } from "./constant";
import { logo } from "@/assets";

export default function QuiceView() {
  let [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(true);
  };
  return (
    <div className="tooltip tooltip-right" data-tip="Quick View">
      <button className="p-2 bg-white rounded-full hover:bg-primaryColor hover:text-white duration-300 ">
        <LuEye onClick={toggleMenu} />
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 text-white"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/80 flex items-center   ">
          <div className=" items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-[80%] h-[80%]  p-5 border border-primaryColor rounded-md absolute  bg-white text-black top-20 left-[10%]  "
            >
              <div className="flex  items-center justify-between relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-3xl hover:text-red-500 duration-200 absolute top-2 right-2"
                >
                  {" "}
                  <MdClose className="" />{" "}
                </button>
              </div>
              {/* details  */}
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
