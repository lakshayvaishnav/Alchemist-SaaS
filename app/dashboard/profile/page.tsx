"use client";
import { cn, NEXTURL } from "@/lib/utils";
import React, { useState } from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";

export default function profile() {
  const session = useSession();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  async function fetchdata() {
    const response = await fetch(`/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("the response is :  ", data);
  }

  console.log("session : client : ", session);

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <button onClick={() => fetchdata()}>Fetch data</button>
        <div
          className={cn(
            "row-span-1 text-2xl w-80 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-neutral-900 dark:border-white/[0.2] bg-white border border-transparent h-[400px]  space-y-4 "
          )}
        >
          <h1>User profile</h1>
          <p className="text-neutral-400 text-sm">
            Here you will find settings regarding your account
          </p>

          <div className="text-sm flex flex-col ">
            <div className=" flex flex-col gap-2">
              <label>First Name</label>
              <input
                className="w-full mb-3 bg-neutral-950 h-6 p-4 rounded-lg focus:outline-none "
                type="text"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label>Last Name</label>
              <input
                className="w-full mb-3 bg-neutral-950 h-6 p-4 rounded-lg focus:outline-none "
                type="text"
              />
            </div>

            <div className=" flex flex-col gap-2">
              <label>Email</label>
              <input
                className="w-full mb-3 bg-neutral-950 h-6 p-4 rounded-lg focus:outline-none "
                type="email"
              />
            </div>
          </div>
          <button className="px-8 py-0.5  border-2 border-black hover:scale-105 dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
            Update Settings
          </button>
        </div>
      </div>
    </div>
  );
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
// );

// const items = [
//   {
//     title: "Fetch details using github api",
//     description:
//       "will add button here in future to add github username and then fetch it using its api",
//     header: <Skeleton />,
//     className: "md:col-span-2",
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "user details using next-auth google",
//     description: "fetch it using getserver session",
//     header: <Skeleton />,
//     className: "md:col-span-1",
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "let user add Project 1",
//     description: "make it hidden if not defined...",
//     header: <Skeleton />,
//     className: "md:col-span-1",
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "user project 2 ",
//     description: "hidden if not defined...",
//     header: <Skeleton />,
//     className: "md:col-span-2",
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
// ];
