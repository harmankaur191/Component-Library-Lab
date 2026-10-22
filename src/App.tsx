import type {AlertBoxProps} from "./types/index"
import { AlertBox } from "./Components/AlertBox/AlertBox"


const alertProps: AlertBoxProps={type:'success', message:"Your profile has been updated successfully!", 
  onClose:()=>window.alert('Alert CLosed'), children:<p>You can now continue using the application</p>}
export default function App(){
  return(<div>
  <AlertBox {...alertProps} />
  </div>)
}