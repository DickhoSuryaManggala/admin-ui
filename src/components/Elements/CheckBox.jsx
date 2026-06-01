import React from "react";

function CheckBox({ label = "Keep me signed in", name = "status", id = "status", ...rest }) {
    return (
        <div className="flex items-center gap-3">
            <input
                type="checkbox"
                className="h-4 w-4 accent-teal-600"
                id={id}
                name={name}
                {...rest}
            />
            <label htmlFor={id} className="text-sm text-slate-700">
                {label}
            </label>
        </div>
    );
};

export default CheckBox;