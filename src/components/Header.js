import React from "react";
import logo from "../logo.svg";
const Header = () => {
    return (
        <header className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-center">
            <img src={logo} alt="" className="mx-auto h-auto w-40 motion-safe:animate-spin" />
            <h1 className="mb-4 text-6xl font-bold text-sky-300">Welcome!!</h1>
            <h4 className="text-2xl font-bold text-sky-100/80"> Happy coding... </h4>
        </header>
    );
};

export default Header;
