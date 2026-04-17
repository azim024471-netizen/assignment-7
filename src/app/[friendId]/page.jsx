import Image from 'next/image';
import React from 'react';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

import InterActionsBtn from '@/components/InterActionsBtn/InterActionsBtn';


const FriendDetailsPage = async ({ params }) => {
    const { friendId } = await params

    const res = await fetch("https://assignment-7-fawn-six.vercel.app//friendsData.json");
    const friendsData = await res.json()
    // console.log(friendsData)

    const friend = friendsData.find((friend) => friend.id === Number(friendId))

    // console.log(friend)

    const { name, picture, days_since_contact, bio, status, tags, email, goal, next_due_date } = friend;


    return (
        <div className='flex flex-col md:flex-row container mx-auto py-20 items-center justify-center gap-6 '>


            <div className="flex flex-col gap-4">

                <div className="bg-white p-6  rounded-lg shadow-sm text-center border
                     border-gray-100 flex flex-col items-center gap-3">
                    <Image src={picture}
                        alt="hello friend"
                        width={80}
                        height={80}
                        className=" rounded-full object-cover mb-4 border-2 border-gray-100">
                    </Image>

                    <div className="flex flex-col gap-1.5 items-center">
                        <h3 className='font-semibold text-xl mb-2'>{name}</h3>

                        <span className={`text-xs font-medium px-2 py-1 rounded-full text-white
                 ${status === "Overdue" ? "bg-[#EF4444]" :
                                status === "Almost Due" ? "bg-[#EFAD44]" :
                                    status === "On-Track" ? "bg-green-900" : ""

                            } `}>{status}</span>


                        <div className="flex flex-wrap justify-center gap-2 ">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-green-200 text-green-700 text-xs font-medium px-2 py-1 rounded-full "
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </div>

                    <p className="font-medium text-gray-500 italic mt-3 mb-1">“{bio}”</p>
                    <p className="text-sm text-gray-500">Preferred:{email}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="bg-white rounded-[4] p-4 shadow-sm border border-gray-100 text-sm
                 text-gray-700 flex
                 items-center justify-center gap-2 font-medium">

                        <RiNotificationSnoozeLine /> Snooze 2 Weeks
                    </button>
                    <button className="bg-white rounded-[4] p-4 shadow-sm border border-gray-100 text-sm
                         text-gray-700 flex items-center justify-center gap-2 font-medium">
                        <FiArchive /> Archive
                    </button>
                    <button className="bg-white rounded-[4] p-4 shadow-sm border border-gray-100 text-sm
                         text-red-500 flex items-center justify-center gap-2 font-medium">
                        <RiDeleteBinLine />Delete
                    </button>
                </div>
            </div>
            <div>


                <div className="flex flex-col gap-6 w-full">


                    <div className="grid grid-cols-3 gap-6">

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">

                            <h2 className="text-3xl font-semibold text-green-900">{days_since_contact}</h2>
                            <p className="text-xl text-gray-600 mt-1">Days Since Contact</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                            <h2 className="text-3xl font-bold text-green-900">{goal}</h2>
                            <p className="text-lg text-gray-600 mt-2">Goal (Days)</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                            <h2 className="text-xl font-bold text-green-900 mt-2">{next_due_date}</h2>
                            <p className="text-xl text-gray-600 mt-2">Next Due</p>
                        </div>
                    </div>


                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-green-900">Relationship Goal</h3>
                            <button className="border px-3 py-1 rounded-sm text-sm font-medium text-gray-600 hover:bg-gray-50">Edit</button>
                        </div>
                        <p className="text-gray-500">Connect every <span className="font-bold text-[18px] text-green-900">{goal} days</span> </p>
                    </div>


                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-green-900 mb-6">Quick Check-In</h3>

                      <InterActionsBtn friend={friend} ></InterActionsBtn>
                        
                    </div>

                </div>

            </div>


        </div>
    );
};

export default FriendDetailsPage;






