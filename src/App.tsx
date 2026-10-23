import type {AlertBoxProps, UserProfileCardProps, User} from "./types/index"
import { AlertBox } from "./Components/AlertBox/AlertBox"
import UserProfileCard from "./Components/UserProfileCard/USerProfileCard"



const alertProps: AlertBoxProps={type:'success', message:"Your profile has been updated successfully!", 
  onClose:()=>window.alert('Alert CLosed'), children:<p>You can now continue using the application</p>}

const user:User = {id:'1001', name:"John Doe", email:"john.doe@example.com", role:"Software Engineer"}
const userId=user.id;
const userProfile:UserProfileCardProps={user:user, showEmail:true, showRole:true,onEdit:(userId) => alert(`Editing user ${userId}`), children:<p></p>}  
export default function App(){
  return(<div>
  <AlertBox {...alertProps} />
  <UserProfileCard {...userProfile}/>
  </div>)
}


