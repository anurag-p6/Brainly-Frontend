import { useEffect, useState } from "react";

export const Name = () => {
     
  const [username, setUsername] = useState<string | null>(null)

    useEffect( ()=> {
      const storedUsername = localStorage.getItem("username");

      if(storedUsername) {
        setUsername(storedUsername);
      }
    }
    )
   return <div>
      <p className="font bold text-2xl font-serif tracking-wide ">Hello👋 {username}! Keep Your Memory Safe Here</p>
   </div>
}