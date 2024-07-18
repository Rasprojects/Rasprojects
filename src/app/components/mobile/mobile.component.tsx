import { Baloo_Bhaina_2 } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose, TfiMenu } from "react-icons/tfi";


export function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex bg-secondary justify-between items-center px-6 py-4 text-dark">
                <div>
                    <h2 className="roboto-regular">Logo</h2>
                </div>
                <div className="p-2" onClick={toggleMenu}>
                   {isOpen?  <TfiClose className="w-8 h-8" /> :  <TfiMenu className="w-8 h-8" />}
                </div>
            </div>
            {/* Menu Items */}
            <div className={`menu-container ${isOpen ? 'h-auto' : 'h-0'} transition-opacity duration-300 overflow-hidden bg-secondary`}>
            <ul className="p-2">
                <div className="container-fluid roboto-bold hover:text-white hover:bg-primary">
                    <li className="p-2">
                        <Link href="/">
                            <span className="block">Home</span>
                        </Link>
                    </li>
                </div>
                <div className="container-fluid roboto-bold hover:text-white hover:bg-primary">
                    <li className="p-2">
                        <Link href="/features">
                            <span className="block">Features</span>
                        </Link>
                    </li>
                </div>
                <div className="container-fluid roboto-bold hover:text-white hover:bg-primary">
                    <li className="p-2">
                        <Link href="/about">
                            <span className="block">About</span>
                        </Link>
                    </li>
                </div>
                <div className="container-fluid roboto-bold hover:text-white hover:bg-primary">
                    <li className="p-2">
                        <Link href="/services">
                            <span className="block">Services</span>
                        </Link>
                    </li>
                </div>
                <div className="container-fluid roboto-bold hover:text-white hover:bg-primary">
                    <li className="p-2">
                        <Link href="/membership">
                            <span className="block">Membership</span>
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
        </>
    );
}
