import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated, isLoading } = useAuth0();

    return (
        (isAuthenticated || isLoading) &&   (
            <button className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-lg" onClick={() => logout()}>
                Sign Out
            </button>
        )
    )
}

export default LogoutButton