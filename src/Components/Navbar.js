import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
    
    return (
        <header class="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
            <nav aria-label="Global" class="mx-auto max-w-container px-4 sm:px-6 lg:px-8">

                <div class="relative flex items-center py-[2.125rem]">
                    <Link to="/" class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8">
                        <span>Home</span>
                    </Link>

                    <div class="ml-auto hidden lg:flex lg:items-center">
                        <div class="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
                            <LoginButton/>
                            <LogoutButton/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
};
export default NavBar;