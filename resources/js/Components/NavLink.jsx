import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center text-sm font-medium focus:outline-none transition duration-150 ease-in-out 
                ${active
                ? 'bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
            `}
        >
            {children}
        </Link>
    );
}
