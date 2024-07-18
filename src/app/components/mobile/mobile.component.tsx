import { Baloo_Bhaina_2 } from "next/font/google";
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
            <div className={`menu-container ${isOpen ? 'h-auto' : 'h-0'} transition-height duration-300 ease-out  ease-out  overflow-hidden bg-secondary`}>
                <ul className="p-2">
                    <div className="container-fluid roboto-bold  hover:text-white  hover:bg-primary">
						<li className="p-2">Home</li>
					</div>
					<div className="container-fluid roboto-bold  hover:text-white  hover:bg-primary">
						<li className="p-2">Features</li>
					</div>
					<div className="container-fluid roboto-bold  hover:text-white hover:bg-primary">
						<li className="p-2">About</li>
					</div>
					<div className="container-fluid roboto-bold  hover:text-white hover:bg-primary">
						<li className="p-2">Services</li>
					</div>
					<div className="container-fluid roboto-bold  hover:text-white focus:ease-in-out hover:bg-primary">
						<li className="p-2">Membership</li>
					</div>
					
                </ul>
            </div>
        </>
    );
}
