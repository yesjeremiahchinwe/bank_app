"use client"
import Link from "next/link"
import Image from "next/image"
import drop_down_icon from "./assets/drop_down.png";
import React, { useState, useEffect, useRef } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLInputElement>(null)



    useEffect(() => {
        const handle = (e: any) => {
            if (!menuRef.current?.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handle)

        return () => {
            document.removeEventListener("mousedown", handle)
        }
    }, [menuRef])



    return (
        <header className="bg-[#FFFFFF] flex items-center justify-between py-2 lg:py-4 px-4 fixed z-50 top-0 w-full">
            <div className="w-full flex items-center justify-between md:w-[90%] max-w-[1300px] mx-auto">
                <Link href="/" className="text-[#5BB5A2] text-[1.5rem] lg:text-[2rem] leading-8 font-[700]">banquee.</Link>


                {/* --------------- Desktop Navbar --------------------- */}
                <div className="hidden lg:flex items-center justify-between gap-16">
                    <ul className="flex items-center gap-4 m-0 list-none">
                        <li>
                            <Link
                                href="#"
                                className="block text-[1rem] leading-[1rem] py-2 px-4 text-[#1A191E] hover:text-[rgb(26,25,30,0.6)]">Features</Link>
                        </li>

                        <li className="bg-[#F8F8F8] text-[#1A191E] p-[10px] rounded-md flex items-center gap-2">
                            <Link
                                href="#"
                                className="block text-[1rem] leading-[1rem] hover:text-[rgb(26,25,30,0.6)]">Compare</Link>
                            <Image
                                src={drop_down_icon}
                                alt="Drop down logo"
                            />
                        </li>

                        <li>
                            <Link
                                href="#"
                                className="block text-[1rem] leading-[1rem] py-2 px-4 text-[#1A191E] hover:text-[rgb(26,25,30,0.6)]">Support</Link>
                        </li>

                        <li className="text-[#1A191E] flex items-center gap-2">
                            <Link
                                href="#"
                                className="block text-[1rem] leading-[1rem] hover:text-[rgb(26,25,30,0.6)]">Blog</Link>
                            <Image
                                src={drop_down_icon}
                                alt="Drop down logo"
                            />
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center justify-center gap-8">
                    <Link href="#" className="text-[#5BB5A2] font-[500] text-[1.15rem] leading-[1.15rem]">Login</Link>
                    <Link
                        href="#"
                        className="py-[8px] text-[0.88rem] sm:text-[1rem] px-3 bg-[#5BB5A2] text-[#FFFFFF] rounded-md"
                    >Open Account</Link>
                </div>

                <div className="p-3 block lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon color="inherit" />
            </div>

            </div>

            



            {/* -------- Mobile Navbar ---------------- */}
            <div className={`bg-[#FFFFFF] text-[#1A191E] flex lg:hidden flex-col items-start gap-8 w-[80%] z-20 h-screen fixed top-0 overflow-x-hidden transition-[right] duration-500 py-4 px-8 ${isOpen ? "right-0" : "-right-[100%]"}`} ref={menuRef}
            >

                <div className="p-3 cursor-pointer block lg:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
                    <CloseIcon color="inherit" />
                </div>

                <ul className="flex flex-col items-start py-8 gap-6 m-0 list-none">
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <Link
                            href="#"
                            className="block text-[1rem] leading-[1rem] py-2 text-[#1A191E] hover:text-[rgb(26,25,30,0.6)]">Features</Link>
                    </li>

                    <li
                        className="text-[#1A191E] flex items-center gap-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Link
                            href="#"
                            className="block text-[1rem] leading-[1rem] hover:text-[rgb(26,25,30,0.6)]">Compare</Link>
                        <Image
                            src={drop_down_icon}
                            alt="Drop down logo"
                        />
                    </li>

                    <li onClick={() => setIsOpen(!isOpen)}>
                        <Link
                            href="#"
                            className="block text-[1rem] leading-[1rem] py-2 text-[#1A191E] hover:text-[rgb(26,25,30,0.6)]">Support</Link>
                    </li>

                    <li
                        className="text-[#1A191E] flex items-center gap-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Link
                            href="#"
                            className="block text-[1rem] leading-[1rem] hover:text-[rgb(26,25,30,0.6)]">Blog</Link>
                        <Image
                            src={drop_down_icon}
                            alt="Drop down logo"
                        />
                    </li>

                    <li>
                        <div className="flex flex-col items-start justify-center gap-6">
                            <Link href="#" className="text-[#5BB5A2] font-[500] mt-4 text-[1.15rem] leading-[1.15rem]">Login</Link>
                            <Link
                                href="#"
                                className="py-[8px] text-[0.88rem] sm:text-[1rem] px-3 bg-[#5BB5A2] text-[#FFFFFF] rounded-md"
                            >Open Account</Link>
                        </div>
                    </li>
                </ul>
            </div>


            {/* ----------- Overlay on menu open -------------- */}
            <div className={`${isOpen ? "z-10 w-full h-screen block lg:hidden fixed top-0 left-0 duration-300 bg-[#00000006] delay-300" : ""}`}></div>
        </header>
    )
}