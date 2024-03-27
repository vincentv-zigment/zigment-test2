import { useToast } from '@/components/hooks/useToast';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function AuthCallbackFor360() {
    const toast = useToast();
    const router = useRouter();

    async function handle360Dialog() {
        const { client_id, partner_id } = router.query;
        if (!client_id) {
            toast.addToast("error", "Invalid client id...");
            return;
        }
        if (!partner_id) {
            toast.addToast("error", "Invalid client id...");
            return;
        }
        // const windowFeatures = "toolbar=no, menubar=no, width=600, height=900, top=100, left=100"
        window.location.href = `https://hub.360dialog.com/dashboard/app/${partner_id}/permissions?client_id=${client_id}&connect_client_user=true`
    }
    useEffect(() => {

        handle360Dialog();
    }, []);

    return (
        <div>
            Authenticating with 360/whatsapp...
        </div>
    );
}

export default AuthCallbackFor360;
