import FriendCard from "./FriendCard";

const FriendsSection = async () => {

    const res = await fetch("http://localhost:3000/friendsData.json");
    const friendsData = await res.json()
    // console.log(friendsData)


    return (
        <div className='  container mx-auto'>
            <h3 className='font-semibold text-2xl mb-4 text-center md:text-left'>Your Friends</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                  friendsData.map(friend=> <FriendCard key={friend.id} friend={friend}> </FriendCard>)
                }
            </div>
        </div>
    );
};

export default FriendsSection;