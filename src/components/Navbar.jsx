import React, { useState } from "react";
import logo from '../imgaes/Logo.png'
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="w-full bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <img src={logo} alt="" />
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-gray-600 hover:text-blue-600">Home</a>
                    <a href="#achievements" className="text-gray-600 hover:text-blue-600">About</a>
                    <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Pricing</a>
                    <a href="#faq" className="text-gray-600 hover:text-blue-600">Consulting</a>
                    <a href="#faq" className="text-gray-600 hover:text-blue-600 ">Ai Coach</a>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="px-[35px] py-[13px] border border-blue-500 text-blue-500 rounded-full text-[16px] text-[#010205] font-bold hover:bg-blue-50">Get started</button>
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
                    <a href="#features" className="block text-gray-700 hover:text-blue-600">Features</a>
                    <a href="#achievements" className="block text-gray-700 hover:text-blue-600">Achievements</a>
                    <a href="#testimonials" className="block text-gray-700 hover:text-blue-600">Testimonials</a>
                    <a href="#faq" className="block text-gray-700 hover:text-blue-600">FAQ</a>
                    <div className="flex space-x-4 pt-4">
                        <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Sign Up</button>
                        <button className="flex-1 px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50">Login</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;