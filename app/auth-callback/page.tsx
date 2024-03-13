/* use client */
'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { trpc } from '../_trpc/client';

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    const { data, isLoading } = ();

    // Make sure to use effect hooks or other logic here

    return (
        // Your JSX or return logic here, for example, showing loading state or data
        <div>Loading...</div>
    );
};

export default Page;
