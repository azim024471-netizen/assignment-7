'use client'
import { ChartLine, Clock, Home } from 'lucide-react';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathName = usePathname();

    

    const navInfos = [
        {
            path: "/",
            name: "Home",
            icon: Home,
        },
        {
            path: "/timeline",
            name: "Timeline",
            icon: Clock,
        },
        {
            path: "/stats",
            name: "Stats",
            icon: ChartLine,
        },
    ];


    return (
        <div className="w-full border-b-white bg-gray-100">
            <div className=" mx-auto max-w-14/16 py-4 flex items-center justify-between">

                <h1 className="text-4xl ">
                    <span className='font-extrabold'>Keen</span><span className="text-green-900 font-semibold">Keeper</span>
                </h1> 
                
                <div className="flex items-center  text-gray-700 flex-wrap">

                    {navInfos.map((nav, index) => {
            const Icon = nav.icon;
            const isAcive = pathName === nav.path

            return (
              <Link
                href={nav.path}
                key={index}
                className={`flex items-center  font-medium gap-1  px-4 p-3 rounded-sm ${isAcive ? 'bg-green-800 text-white' : ''}`}
              >
                <Icon size={18} />
             <span className='hidden sm:inline'>{nav.name}</span>
              </Link>
            );
          })}


            

                </div>
            </div>
        </div>
    );
};

export default NavBar;






