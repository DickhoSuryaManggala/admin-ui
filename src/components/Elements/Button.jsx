import React from "react";

function Button(props) {
    const { children, type = "submit", variant = "primary" } = props;

    const baseClasses = "h-12 rounded-xl text-sm w-full transition-colors duration-200";
    const variantClasses = {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-slate-200 text-slate-700 hover:bg-slate-300",
    };

    const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary}`;

    return (
        <button className={finalClasses} type={type}>
            {children}
        </button>
    );
}

export default Button;