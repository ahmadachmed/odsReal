import React, { useEffect, useRef } from 'react';

export default function TextInput({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    disabled,
    placeHolder
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                placeholder={placeHolder}
                type={type}
                name={name}
                value={value}
                className={
                    `rounded-md shadow-sm border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                disabled={disabled}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
