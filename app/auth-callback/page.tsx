'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { trpc } from '../_trpc/client';

const Page = async () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    const { data, isLoading } = trpc.authCallback.useQuery(undefined, {onSuccess: ({success}) => {
        if(success){
            //user is synced to db.
            router.push(origin ? `/${origin}` : '/dashboard')
        }
    }});

    // Make sure to use effect hooks or other logic here

    return (
        // Your JSX or return logic here, for example, showing loading state or data
        <div>Loading...</div>
    );
};

export default Page;
