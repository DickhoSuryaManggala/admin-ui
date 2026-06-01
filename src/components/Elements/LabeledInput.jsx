import React from "react";
import Input from "./input";

function LabeledInput(props) {
    const { label, id, ...rest } = props;
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm text-gray-700">
                {label}
            </label>
            <Input id={id} {...rest} />
        </div>
    );
}

export default LabeledInput;