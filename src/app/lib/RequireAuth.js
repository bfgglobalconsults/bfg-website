// import './globals.css'
"use client";

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/authContext';

const authenticatedRoutes = [
    '/admin',
]

export default function RequireAuth({ children }) {
    const { user, loading } = useAuth();
    const pathname = usePathname();
    const { push } = useRouter();

    useEffect(() => {
        const requiresAuth = pathname.startsWith('/admin');
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