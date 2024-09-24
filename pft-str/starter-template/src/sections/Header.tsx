"use client"
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export const Header = () => {
    const navRef = useRef(null);

    useEffect(() => {
        const nav = navRef.current;

        nav.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault();
                const targetId = event.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth',
                    });
                }
            }
        });
    }, []);

    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-10">
            <nav ref={navRef} className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">

                <Link href="#home" className="nav-item">
                    Home
                </Link>

                <Link href="#projects" className="nav-item">
                    Project
                </Link>

                <Link href="#about" className="nav-item">
                    About
                </Link>

                <Link href="#contact" className="nav-item bg-white text-gray-900">
                    Contact
                </Link>
            </nav>
        </div>
    );
};