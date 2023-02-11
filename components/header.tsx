import {FaBars} from "react-icons/fa"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const Header = ({initialIsOpen}) => {

    const route = useRouter();
    const [isOpen, setOpen] = useState(initialIsOpen);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("menuState", JSON.stringify(isOpen));
        }
    }, [isOpen]);

    return (
        <header>
        <div className="bg-gray-900 h1/4 p-1 top-0 inset-x-0 static">
            <nav className="py-2 md:py-4">
                <div className="px-12 mx-auto md:flex md:items-center">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                        <a className="font-bold text-xl text-slate-200">dwag</a>
                        </Link>
                        <button className="md:hidden" onClick={() => setOpen(!isOpen)}>
                            <FaBars className="fill-current text-slate-200 hover:text-white" />
                        </button>
                    </div>
                    <div className={`md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 ${isOpen ? "block" : "hidden"}`}>
                        <Link href="/">
                        <a className={route.pathname == '/' ? 'font-bold bg-gray-700 rounded-lg p-2 lg:px-4 md:mx-2 text-slate-100 rounded hover:bg-gray-500 transition-colors duration-300' : "font-bold p-2 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-500 rounded-lg transition-colors duration-300"}>Home</a>
                        </Link>
                        <Link href="/projects">
                        <a className={route.pathname == '/projects' ? 'font-bold bg-gray-700 rounded-lg p-2 lg:px-4 md:mx-2 text-slate-100 rounded hover:bg-gray-500 transition-colors duration-300' : " font-bold p-2 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-500 rounded-lg transition-colors duration-300"}>Projects</a>
                        </Link>
                        {/* <Link href="/blog">
                        <a className={route.pathname == '/blog' ? 'font-bold bg-gray-700 rounded-lg p-2 lg:px-4 md:mx-2 text-slate-100 rounded hover:bg-gray-500 transition-colors duration-300' : " font-bold p-2 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-500 rounded-lg transition-colors duration-300"}>Blog</a>
                        </Link> */}
                    </div>
                </div>
            </nav>
        </div>
        </header>
    );
};

Header.getInitialProps = async () => {
    const initialIsOpen = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("menuState")) : false;

    return {
        initialIsOpen
    };
};

export default Header;