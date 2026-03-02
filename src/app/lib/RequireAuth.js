// import './globals.css'
"use client";

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/authContext';

const authenticatedRoutes = [
    '/admins', // Your custom admin dashboard (note: plural)
]

export default function RequireAuth({ children }) {
    const { user, loading } = useAuth();
    const pathname = usePathname();
    const { push } = useRouter();

    useEffect(() => {
        // Only check for /admins (your custom dashboard), not /admin (PayloadCMS)
        const requiresAuth = pathname.startsWith('/admins');
        if (!loading && !user && requiresAuth) {
            push('/login');
        }
    }, [user, loading, pathname, push]);

    if (loading) return <div className="p-4">Loading...</div>;
    if (!user) return null;

    return (
        <>
            {children}
        </>
    );
}