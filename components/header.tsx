import {FaTwitter} from "react-icons/fa"
import Link from "next/link"
import { useRouter } from "next/router";

export const Header = () => {

    const route = useRouter();

    return (
        <header>
        <div className="bg-gray-900 h1/4 p-1 top-0 inset-x-0 static">
            <nav className="py-2 md:py-4">
                <div className="px-12 mx-auto md:flex md:items-center">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                        <a className="font-bold text-xl text-slate-200">dwag</a>
                        </Link>
                    </div>
                    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
                        <Link href="/">
                        <a className={route.pathname == '/' ? 'font-bold bg-gray-700 rounded-lg p-2 lg:px-4 md:mx-2 text-slate-100 rounded hover:bg-gray-500 transition-colors duration-300' : "font-bold p-2 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-500 rounded-lg transition-colors duration-300"}>Home</a>
                        </Link>
                        <Link href="/projects">
                        <a className={route.pathname == '/projects' ? 'font-bold bg-gray-700 rounded-lg p-2 lg:px-4 md:mx-2 text-slate-100 rounded hover:bg-gray-500 transition-colors duration-300' : " font-bold p-2 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-500 rounded-lg transition-colors duration-300"}>Projects</a>
                        </Link>
                        <Link href="/blog">
                        <a className={route.pathname == '/blog' ? 'font-bold bg-gray-700 rounded-lg p-2 lg:px-4 md:mx-2 text-slate-100 rounded hover:bg-gray-500 transition-colors duration-300' : " font-bold p-2 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-500 rounded-lg transition-colors duration-300"}>Blog</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        </header>
    );
};

{/* <ul className="text-center">
                    <p className="text-slate-200 font-bold text-3x1 pb-2 hover:text-slate-200 hover:animate-pulse">
                        Personal Website
                    </p>
                    <div className="text-indigo-200 font-bold text-xs">
                        <p>Daniel Wagner</p>
                    </div>
                </ul> */}

export default Header;
