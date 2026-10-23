import type { UserProfileCardProps } from "../../types";
import profilepic from "../../assets/profilepic.jpg"


export default function UserProfileCard(props:UserProfileCardProps){

    const styles ="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
    
    const id=props.user.id;
    return(
    <div className={styles}>
        <img src ={profilepic} alt="user profile pic" className="size-12 shrink-0"/>
      <div className="items-center text-gray-500 dark:text-gray-400 ">
        <h1>{props.user.name}</h1>
        <h2>{props.user.email}</h2>
        <p>{props.user.role}</p>
        <button onClick={()=>props.onEdit(id)} className="p-4 bg-blue-500 mx-auto flex max-w-sm text-white-700" >Edit Profile</button>
        </div>
         
    </div>)
}