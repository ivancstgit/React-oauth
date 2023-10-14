import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    

    return (
        !isAuthenticated && !isLoading && (
            <button className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-lg" onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export default LoginButton