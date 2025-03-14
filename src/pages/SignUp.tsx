import { useRef } from "react"
import { Button } from "../component/Button"
import axios from "axios"
import { Input } from "../component/Input"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import LoginButton from "../component/login"
import { SignIn } from "./SignIn"


export const SignUp = () => {
   const usernameRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);
   const navigate = useNavigate();

    async function signup() {

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
      try {
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
          username:username,
          password:password
      })
      navigate("/signin")   

      } catch (error:any) {
        // Handle errors from the axios request
        if(axios.isAxiosError(error)) {
          // Handle axios-specific errors
          if (error.response?.status === 409) {
            alert("User already exists. Please choose a different username.");
          } else {
            alert("An error occurred. Please try again.");
          }
        } else {
          // Handle non-axios errors (e.g., network error)
          alert("Network error or request failed.");
        }
        console.error("Error signing up:", error);
      }
    }

  
  return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center"> 
       <div className="bg-white p-10 rounded-md">
          <Input ref={usernameRef} onKeyDown={handleKeyDown} placeholder="Username" />
          <Input ref={passwordRef} onKeyDown={handleKeyDown} placeholder="Password" type="password" />

          <div className="min-w-10" >
            <Button onClick={signup} fullWidth = {true} variant="primary" text={"Sign Up"}/>
            <div className="flex justify-end pt-2 pr-1">
             <button onClick={() => navigate('/signin')} className="text-[12px]">Already Account?Login</button>
            </div>
          </div>
       </div>
  </div>
}


const handleKeyDown:any = (e:any) => {
  if(e.key === 'Enter')
   SignUp();
}