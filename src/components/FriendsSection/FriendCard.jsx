import Image from "next/image";

const FriendCard = ({ friend }) => {
    const { name, picture, days_since_contact, status, tags } = friend;

    

    return (
        <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center border border-gray-100">
            
            <Image src={picture} 
                alt={name}
                width={80}
                height={80}
                className=" rounded-full object-cover mb-4 border-2 border-gray-100"> 
                </Image>
            
            <div className="space-y-2">
                <h4 className="text-[20px] font-semibold ">{name}</h4>
            <p className="text-xs text-gray-500 ">{days_since_contact}d ago</p>

        
            <div className="flex flex-wrap justify-center gap-2 ">
                {tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="bg-green-200 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full "
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div>
                <span className={`text-xs font-medium px-3 py-1.5 rounded-full text-white
                 ${status === "Overdue" ? "bg-[#EF4444]" :
                    status === "Almost Due" ? "bg-[#EFAD44]" :
                    status === "On-Track" ? "bg-green-900" : ""

                } `}>{status}</span>
            </div>
            </div>

        </div>
    );
};

export default FriendCard;