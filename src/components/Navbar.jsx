import React, { useState } from "react";
import logo from '../imgaes/Logo.png'
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="w-[1920px] bg-[#FAFAFA] py-[30px]">
            <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">
                <img src={logo} alt="" />
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                    <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
                    <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
                    <a href="#consulting" className="text-gray-600 hover:text-blue-600">Consulting</a>
                    <a href="#aicoach" className="text-gray-600 hover:text-blue-600 ">Ai Coach</a>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="px-[35px] py-[13px] border-[1px] rounded-full text-[16px] text-[#010205] font-bold hover:bg-blue-50">Get started</button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4">
                    <a href="/" className="block text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
                    <a href="#pricing" className="block text-gray-700 hover:text-blue-600">Pricing</a>
                    <a href="#consulting" className="block text-gray-700 hover:text-blue-600">Consulting</a>
                    <a href="#aicoach" className="block text-gray-700 hover:text-blue-600">Ai Coach</a>
                    <div className="flex space-x-4 pt-4">
                        <button className="flex-1 px-4 py-2 border-[1px]  text-[#010205] font-bold rounded-full hover:bg-blue-50">Get started</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;