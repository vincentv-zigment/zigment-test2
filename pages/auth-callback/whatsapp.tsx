import ErrorPage from '@/components/common/ErrorPage';
import axiosAPIWithAuth from '@/lib/axiosAPIWithAuth';
import { SolutionType } from '@/lib/types/ui';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function AuthCallbackForWhatsApp() {
    const router = useRouter();
    const [error, setError] = useState(false);
    async function handleWhatsappAuth() {
        // Capture the access_token from the URL fragment
        // Capture the code from the URL query string
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        const code = params.get("code");

        if (!code) {
            console.error("Access token was not returned by Meta Whatsapp.");
            setError(true)
            return;
        }
        if (code === 'undefined') {
            console.error("Access token was not returned by Meta Whatsapp.");
            setError(true)
            return;
        }

        // Send access_token to your backend to validate, save, and/or act upon it
        try {
            const response = await axiosAPIWithAuth.post('/communication-channels/setup-whatsapp-embedded',
                {
                    code: code,
                    solution_type: SolutionType.SOLUTION_PARTNER_360,
                    solution_id: process.env.NEXT_PUBLIC_360_DIALOG_KEY,
                }
            );
            window.close();
            // if window not closed redirect to dashboard
            window.location.href = '/app/dashboard';
        } catch (error) {
            console.error("Error occurred while validating the whatsapp token:", error);
            setError(true);

            window.close(); // Close the popup when finished
            // if window not closed redirect to dashboard
            window.location.href = '/app/dashboard';
        }
    }
    useEffect(() => {


        handleWhatsappAuth();
    }, []);

    if (error) {
        return (
            <ErrorPage heading='Error occurred while authenticating whatsapp setup' />
        );
    }
    return (
        <div className='text-center'>
            Authenticating whatsapp setup...
        </div>
    );
}

export default AuthCallbackForWhatsApp;
