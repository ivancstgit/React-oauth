import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";


const Home = () => {
    const {
        user,
        isAuthenticated,
        isLoading,
        error } = useAuth0();

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h1 className="text-center text-2xl font-bold text-gray-900">Auth0 Login</h1>
                {error && <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Authentication Error</h1>}
                {!error && isLoading && <div><Loading /></div>}
                {!error &&
                    !isLoading &&
                    isAuthenticated && (
                        <div>
                            <p className="mt-3 text-center text-lg text-gray-500">
                                <h1 >You are logged in!</h1>
                                <h2 className="mt-3 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-xl">Welcome {user.name}</h2>
                            </p>
                            {user.picture && <img className=" rounded-full mt-10 mx-auto h-64 w-auto" src={user.picture} alt={user.name} />}
                        </div>
                    )}
                {!error &&
                    !isLoading &&
                    !isAuthenticated && (
                        <section>
                            <p className="mt-3 text-center text-xl text-gray-500">
                            <h1 className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-xl">Home</h1>
                            <h2 className="mt-3">You are not logged in</h2>
                            </p>
                            <img className=" rounded-full mt-10 mx-auto h-64 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVv22mLrwZ4Td1_UBjVbLGnJif_Dut-dwZJChWPwpOFJaigfq557Um-8dnQj_S7udKqII&usqp=CAU" alt="login" />
                        </section>
                    )}
            </div>
        </div>
    )
}

export default Home
