import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faExclamationCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
    return (
        <div>
            <h1 className='font-bold text-5xl text-white flex flex-col align-center justify-center text-center mt-20'>
                Timeline
            </h1>
        <div className="p-4 min-h-100vh clear-both flex align-center justify-center mt-12 mb-20">
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
    
            {/* <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="text-white">
                    <FontAwesomeIcon icon={faCheckCircle}/>
                  </i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">Package Booked</h3>
                <p className="leading-tight text-justify w-full">
                  21 July 2021, 04:30 PM
                </p>
              </div>
            </div>
    
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                <i className="text-white">
                    <FontAwesomeIcon icon={faCheckCircle}/>
                  </i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">Out for Delivery</h3>
                <p className="leading-tight text-justify">
                  22 July 2021, 01:00 PM
                </p>
              </div>
            </div> */}
    
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-600 shadow text-center">
                  <i className="text-gray-300">
                    <FontAwesomeIcon icon={faExclamationCircle}/>
                  </i>
                </div>
              </div>
              <div className="bg-gray-600 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-gray-300">Started apprenticeship as software developer at Sony DADC</h3>
                <p className="leading-tight text-justify text-gray-300">
                  01 September 2020 - Present
                </p>
                <p className="leading-tight text-justify">
    
                </p>
              </div>
            </div>
    
          </div>
        </div>
      </div>
      </div>
    );
};

export default Timeline;