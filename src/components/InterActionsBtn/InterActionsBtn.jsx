
'use client'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { useContext } from "react";
import { InteractionContext } from "@/context/interactionsContext";



const InterActionsBtn = ({friend}) => { 

    const {interActions, setInterActions} = useContext(InteractionContext) 

     


    const handleInteraction =(connetBy)=> {

    const interActFriend ={ 
           connet : connetBy,
           name: friend.name,
            id: friend.id,
            date : new Date().toDateString()
            
        }
        //   console.log(friend.name, 'connected by', connetBy)
        
            //   console.log(interActFriend)

          const upDateInterActions =[...interActions, interActFriend]
          setInterActions(upDateInterActions)

          
        }
        
        // console.log(interActions)

        // console.log(friend)
   



    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                            
                            <button onClick={() => handleInteraction('Call')} 
                            className="bg-gray-50 p-4 rounded-xl border border-transparent hover:shadow-xl
                             flex flex-col items-center justify-center gap-2">
                                <span className="text-2xl"><FiPhoneCall />
                                </span>
                                <span className="text-xl">Call</span>
                            </button>


                            <button onClick={() => handleInteraction('Text')} 
                            className="bg-gray-50 p-4 rounded-xl border border-transparent hover:shadow-xl 
                            flex flex-col items-center justify-center gap-2">
                                <span className="text-2xl"><MdOutlineTextsms />

                                </span>
                                <span className="text-xl">Text</span>
                            </button>

                            <button onClick={() => handleInteraction('Video')}
                             className="bg-gray-50 p-4 rounded-xl border border-transparent hover:shadow-xl
                              flex flex-col items-center justify-center gap-2">
                                <span className="text-2xl"><IoVideocamOutline />
                                </span>
                                <span className="text-xl">Video</span>
                            </button>

                        </div>
        </div>
    );
};

export default InterActionsBtn;