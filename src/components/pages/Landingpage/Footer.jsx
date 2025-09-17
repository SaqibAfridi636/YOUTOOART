import React from 'react'
import Logo from '../../../assets/Logos/Logo.png'
import Xlogo from '../../../assets/Logos/Xlogo.png'
import Instalogo from '../../../assets/Logos/Instalogo.png'
import Facebooklogo from '../../../assets/Logos/Facebooklogo.png'
import Youtubelogo from '../../../assets/Logos/Youtubelogo.png'
import Linkedinlogo from '../../../assets/Logos/Linkedinlogo.png'

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-8">
            {/* Top Row */}
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Logo + Brand */}
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-8 w-auto" />
                    <h1 className="ml-2 text-lg font-semibold">YOUTOOART</h1>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-6 text-gray-400 text-sm">
                    <a href="#home" className="hover:text-white">Home</a>
                    <a href="#features" className="hover:text-white">Features</a>
                    <a href="#how" className="hover:text-white">How it Works</a>
                    <a href="#contact" className="hover:text-white">Contact Us</a>
                </div>

                {/* Sign Up Button */}
                <div className="mt-4 md:mt-0">
                    <button
                        type="button"
                        className="ml-auto w-[92px] h-[33px] rounded-[20px] bg-black border border-white text-sm font-medium hover:bg-white hover:text-black transition"
                    >
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Divider */}
            <hr className="max-w-[100%] mx-auto my-6 border-gray-700" />

            {/* Bottom Row */}
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Copyright */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} YouTooArt - All Rights Reserved
                </p>

                {/* Legal Links */}
                <div className="flex gap-4 text-sm text-gray-400">
                    <a href="#privacy" className="hover:text-white">Privacy</a>
                    <span>.</span>
                    <a href="#terms" className="hover:text-white">Terms & Conditions</a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    {[Xlogo, Instalogo, Linkedinlogo, Youtubelogo, Facebooklogo].map((icon, index) => (
                        <img
                            key={index}
                            src={icon}
                            alt="social"
                            className="h-6 w-6 cursor-pointer hover:opacity-70 transition"
                        />
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
