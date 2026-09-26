"use client";
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-black/5 bg-white px-5 py-4 sm:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="text-2xl font-black text-[#171717]">
                    Oono<span className="text-[#ff5a36]">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
                    <Link href="/track" className="transition hover:text-[#ff5a36]">Track Lunch</Link>
                    <Link href="/schools" className="transition hover:text-[#ff5a36]">Coverage</Link>
                    <Link
                        href="/login"
                        className="rounded-xl bg-[#171717] px-4 py-2 text-white transition hover:bg-[#ff5a36]"
                    >
                        Parent Portal
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <span className={`block w-6 h-0.5 bg-[#171717] transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-[#171717] transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-[#171717] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <nav className="md:hidden mt-4 flex flex-col gap-4 border-t border-black/5 pt-4 text-base font-semibold">
                    <Link
                        href="/track"
                        onClick={() => setIsOpen(false)}
                        className="transition hover:text-[#ff5a36]"
                    >
                        Track Lunch
                    </Link>
                    <Link
                        href="/schools"
                        onClick={() => setIsOpen(false)}
                        className="transition hover:text-[#ff5a36]"
                    >
                        Coverage
                    </Link>
                    <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl bg-[#171717] px-4 py-3 text-center text-white transition hover:bg-[#ff5a36]"
                    >
                        Parent Portal
                    </Link>
                </nav>
            )}
        </header>
    )
}

export default Header;