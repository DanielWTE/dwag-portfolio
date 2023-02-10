import Image from 'next/image'
import Link from 'next/link';
import image from '../public/profile.png'

const Welcomer = () => {
    return (
    <div>
        <div className="min-h-100vh clear-both flex align-center justify-center mt-28">
        <div className="px-6 sm:px-12 flex content-center relative right-36 rotate-45 hidden xl:block">
                <Image src={image} alt="Profile Picture" objectFit="cover" height="300px" width="300px" className="rounded-full duration-100"/>
            </div>
            <div className="flex flex-col sm:ml-10 sm:mt-10 mx-10 mt-10 text-center">
                <h1 className="font-bold text-5xl sm:text-7xl text-left mb-5">
                    Daniel Wagner
                </h1>
                <p className="text-base sm:text-lg text-left font-normal mb-5 flex-wrap max-w-md">
                    This is my personal website, you can find my projects, something about me, and more here.
                </p>
                <Link href="/projects">
                <a className="font-semibold text-white sm:mt-10 mt-5 pt-5 bg-blue-500 rounded-md w-full sm:w-60 h-16 text-base sm:text-lg hover:bg-gray-700 hover:-translate-y-1 hover:scale-105 duration-200 ease-in-out transition">
                    My Projects
                </a>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Welcomer;