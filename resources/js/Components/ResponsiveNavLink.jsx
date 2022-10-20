import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
                active
                ? 'border-orange-400 bg-orange-200 text-gray-800 block px-3 py-2 rounded-md text-base font-medium'
                : 'border-transparent text-gray-300 hover:text-white rounded-md hover:bg-gray-700 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'
            }`}
        >
            {children}
        </Link>
    );
}
