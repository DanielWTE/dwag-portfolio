import Image from 'next/image'
import Link from 'next/link';
import image from '../public/profile.png'

const Welcomer = () => {
    return (
    <div>
        <div className="min-h-100vh clear-both flex align-center justify-center">
            <div className="w-2/4 rounded-full px-12 flex content-center relative left-24">
                <Image src={image} alt="Profile Picture" objectFit="cover" height="300px" width="300px"className="rounded-full" />
            </div>
            <div className="w-2/4 flex flex-col md:ml-10 mx-10 mt-10 text-center">
                <h1 className="font-bold text-7xl text-left mb-5">
                    TestTEstTEst
                </h1>
                <p className="text-left font-normal mb-5 flex-wrap">
                    Testetestt3est
                </p>
                <Link href="/">
                <a className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-blue-500 rounded-md w-60 h-16 text-lg hover:bg-black duration-300 transition-colors">
                    Testtest
                </a>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Welcomer;