import { Input } from "../component/Input"
import { Button } from "../component/Button"
import { useRef } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
   const usernameRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);
   const navigate = useNavigate();

   const signin = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    
    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
     username,
     password
    })
     
    const jwt = response.data.token;
    localStorage.setItem('token',jwt)
    navigate('/dashboard')
   }
   
  return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center"> 
         <div className="bg-white p-10 rounded-md">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password"type="password" />
  
            <div className="min-w-10">
              <Button onClick={signin} fullWidth = {true} variant="primary" text={"Sign In"}/>
            </div>
         </div>
    </div>
}