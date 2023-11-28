"use client"

import { Icons } from "@/components/icons"
import Link from "next/link";
import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator";

const servers = [
   { id: 1, name: 'Server 1', href: '/server/1' },
   { id: 2, name: 'Server 2', href: '/server/2' },
   { id: 3, name: 'Server 3', href: '/server/3' },
   // Add more servers as needed
];

export const NavigationSidebar = () => {
  return (
    <>
      <div className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#cc9900] bg-[#CC9900]'>
        <Link href="/" className="flex items-center space-x-2 pt-2">
          <Icons.logo className="h-12 w-12  " />
        </Link>
        <Separator/>
        <Link href="/" className="flex items-center space-x-2">
          <Icons.barchart className="h-10 w-10" />
        </Link>
        <Link href="/" className="flex items-center space-x-2">
          <Icons.building className="h-10 w-10" />
        </Link>
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-10 w-10" />
        </Link>
      </div>
    </>
  )
}

export default NavigationSidebar;
