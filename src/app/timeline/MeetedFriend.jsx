import React from 'react';

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

const MeetedFriend = ({friend}) => {
    const {name, connet, date} = friend
    return (
       <div className="flex w-full items-center
        gap-4 bg-green-50 p-4 rounded-lg shadow-sm 
        border  border-gray-100  
        mx-auto">
  
  
  <div className="text-3xl text-gray-600">
                {connet === 'Call' && <FiPhoneCall className="text-blue-500" />}
                {connet === 'Text' && <MdOutlineTextsms className="text-green-500" />}
                {connet === 'Video' && <IoVideocamOutline className="text-purple-500" />}
            </div>

  <div>
    <div className="flex items-center gap-1">
      <h5 className="text-green-900 font-medium text-xl ">{connet}</h5>
      <span className="text-gray-600 ">with {name}</span>
    </div>
    <p className="text-[#6B7280] text-sm">{date}</p>
  </div>

</div>
    );
};

export default MeetedFriend;