import Image from 'next/image'
import Link from 'next/link';
import image from '../public/profile.png'

const Welcomer = () => {
    return (
    <div>
        <div className="min-h-100vh clear-both flex align-center justify-center mt-28">
            <div className="px-12 flex content-center relative right-36 rotate-45">
                <Image src={image} alt="Profile Picture" objectFit="cover" height="300px" width="300px" className="rounded-[50px] hover:rounded-[60px] duration-100"/>
            </div>
            <div className="flex flex-col md:ml-10 mx-10 mt-10 text-center">
                <h1 className="font-bold text-7xl text-left mb-5">
                    Daniel Wagner
                </h1>
                <p className="text-lg text-left font-normal mb-5 flex-wrap max-w-md">
                    This is my personal website, you can find my projects, something about me, and more here.
                </p>
                <Link href="/projects">
                <a className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-blue-500 rounded-md w-60 h-16 text-lg hover:bg-gray-700 hover:-translate-y-1 hover:scale-105 duration-200 ease-in-out transition">
                    My Projects
                </a>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Welcomer;