import React from "react";
import Logo from "../Elements/Logo";

function AuthLayout(props) {
    const { children } = props;

    return (
        <>
            <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
                {/* Container start */}
                <div className="w-full max-w-md">
                    <Logo />
                    {children}
                </div>
                {/* Container end */}
            </main>
        </>
    );
}

export default AuthLayout;