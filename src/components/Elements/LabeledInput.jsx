import React from "react";

function LabeledInput(props) {
    const { label, id, ...rest } = props;
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm text-gray-700">
                {label}
            </label>
            <input
                className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                id={id}
                {...rest}
            />
        </div>
    );
}

export default LabeledInput;