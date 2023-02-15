import { motion, useCycle } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link';
import image from '../public/profile.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Welcomer = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const pathLength = isOpen ? 400 : 200;
  

  return (
    <div>
      <div className="min-h-100vh clear-both flex align-center justify-center sm:mt-28 mt-12">
        <div className="px-6 sm:px-12 flex content-center relative right-36 rotate-45 hidden xl:block">
          <motion.div
            className="w-300 h-300 rounded-full overflow-hidden relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleOpen()}
          >
            <Image src={image} alt="Profile Picture" objectFit="cover" height="300px" width="300px" className="rounded-full duration-100"/>
            <motion.svg
              className="w-16 h-16 rounded-full overflow-hidden absolute top-0 left-0"
              style={{ border: "3px solid white" }}
            >
              <motion.path
                fill="transparent"
                stroke="white"
                strokeWidth="3"
                d={`M 10 10 C 10 ${pathLength}, ${pathLength} 10, 10 10`}
                initial={false}
                animate={{ pathLength: isOpen ? 200 : 400 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.div>
        </div>
        <div className="flex flex-col sm:ml-10 sm:mt-10 mx-10 mt-10 text-center">
          <h1 className="font-bold text-5xl sm:text-7xl text-left mb-5">
            Daniel Wagner
          </h1>
          <p className="text-base sm:text-lg text-left font-normal mb-5 flex-wrap max-w-md">
            This is my personal website, you can find my projects, something about me, and more here.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/projects">
              <a className="font-semibold text-white sm:mt-10 mt-5 pt-5 bg-blue-500 rounded-md w-full sm:w-48 h-16 text-base sm:text-lg hover:bg-gray-700 hover:-translate-y-1 duration-200 ease-in-out transition">
                My Projects
              </a>
            </Link>
            <Link href="https://resume.dwag.me">
              <a className="font-semibold text-white sm:mt-10 mt-5 pt-5 bg-blue-500 rounded-md w-full sm:w-32 h-16 text-base sm:text-lg hover:bg-gray-700 hover:-translate-y-1 duration-200 ease-in-out transition">
              <FontAwesomeIcon icon={faDownload} /> Resume
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcomer;