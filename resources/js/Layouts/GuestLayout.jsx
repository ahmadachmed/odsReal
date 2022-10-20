import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Guest({ children, textHeader, title, btnText, btnHref }) {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="hidden relative md:block w-2/3">
                <span className="absolute px-5">
                    <Link href={"/"}>
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500 md:block" />
                    </Link>
                </span>
                <img
                    src="images/auth-1.jpg"
                    className="h-screen w-full object-cover object-top"
                />
            </div>
            <div className="flex h-screen w-full flex-col px-5 md:py-5 bg-amber-50">
                <div className={`flex items-center md:justify-end justify-between md:border-transparent border-b-2 border-orange-500`}>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500 md:hidden block" />
                    </Link>
                    <div className="flex items-center">
                        <p className=' font-medium text-sm text-gray-700 hidden md:block'>{textHeader}</p>
                        <Link href={btnHref}>
                            <PrimaryButton className="ml-4">{btnText}</PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="flex w-full h-full items-center">
                    <div className="mx-auto md:w-2/3 w-full">
                        <div className="flex items-start text-start text-2xl font-bold">
                            <h2>{title}</h2>
                        </div>

                        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
