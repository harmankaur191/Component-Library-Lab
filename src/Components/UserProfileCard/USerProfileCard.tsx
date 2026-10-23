import type { UserProfileCardProps } from "../../types";
import profilepic from "../../assets/profilepic.jpg"


export default function UserProfileCard(props: UserProfileCardProps) {

    const id = props.user.id;
    return (
        <div className="mx-auto  p-6 max-w-sm shadow-lg outline outline-black/5">
            <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 text-center">
                <img src={profilepic} alt="user profile pic" className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" />
                <div className="items-center text-gray-500 dark:text-gray-400  gap-x-4">
                    <h1 className="font-bold text-xl text-black">{props.user.name}</h1>
                    <h2>{props.user.email}</h2>
                    <p>{props.user.role}</p>
                    <div>{props.children}</div>
                </div>
            </div>
             <button onClick={() => props.onEdit(id)} className="p-4 bg-blue-500 w-full text-white font-bold " >Edit Profile</button>
        </div>)
}