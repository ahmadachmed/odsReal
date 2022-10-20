import React from 'react';

export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={
                `inline-flex items-center px-4 py-2 border border-orange-600 rounded-md font-semibold text-xs text-orange-600 hover:text-white tracking-widest hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring ring-orange-300 disabled:opacity-25 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
