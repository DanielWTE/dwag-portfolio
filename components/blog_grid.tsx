import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PropTypes from 'prop-types'
import mylittleponyCover from '../public/mylittleponyCover.jpg'

const ProjectCard = ({ image, title, description, url } : any) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 rounded-lg shadow-lg w-80 max-w-80">
      <div
        className="w-full h-44 rounded-t-xl overflow-hidden relative"
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500"></div>
          </div>
        )}
        <Image
          src={image}
          alt={title}
          className={loading ? "hidden" : "block object-cover absolute inset-0 w-full h-full"}
          width="340"
          height="190"
          onLoadingComplete={handleLoad}
          onError={handleError}
        />
      </div>
      <div className="flex flex-col items-center justify-start w-full p-4 space-y-2">
        {/* Title */}
        <div className="flex items-center justify-center w-full">
          <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
        </div>
        {/* Description */}
        <div className="flex items-center justify-center text-center w-full">
          <p className="text-gray-400">{description}</p>
        </div>
        {/* Link */}
        <div className="flex items-center justify-center w-full">
          <Link href={url}>
            <a className="text-sm font-bold text-blue-500">Learn More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
}

const Project_grid = () => {

    return (
      <div className="flex justify-center">
          <div className="flex justify-center flex-wrap gap-10 mt-24 mb-24 max-w-screen-xl">
            <ProjectCard
              image={mylittleponyCover}
              title="My Little Pony Journey"
              description="A article about my journey into the world of My Little Pony. I will document here how I feel about the series."
              url="/article/my-little-pony"
            />
        </div>
      </div>
    );
  };
  
  export default Project_grid;