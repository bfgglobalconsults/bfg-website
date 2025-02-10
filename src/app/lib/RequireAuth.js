// import './globals.css'
"use client";

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { selectCurrentUser } from '@/redux/auth/authSlice';

const authenticatedRoutes = [
    '/admin',
]

export default function RequireAuth({ children }) {
    const [user, setUser] = useState({})
    const currentuser = useSelector(selectCurrentUser)
    const pathname = usePathname();
    const { push } = useRouter()

    // console.log("currentuser : ", currentuser)
  useEffect(() => {
      const requiresAuth = pathname.startsWith('/admin')
      if (!currentuser && requiresAuth) {
        
        push('/login')
      }
      
      if(currentuser) setUser(currentuser)
    },[currentuser, pathname, push])

    if(!user?.email) return <><div className="p-4">Loading...</div></>

    return (
      <>
          {children}
      </>
    );
}