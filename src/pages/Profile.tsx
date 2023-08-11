import { useContext } from "react"
import AuthContext from "../store/auth-context"



const Profile: React.FC = ()=>{

    const authCtx=useContext(AuthContext)

    return(
        <h1>
        Hi {authCtx.userName} You Are Logged in using {authCtx.userRole} Profile
      </h1>
    )

}

export default Profile