import Link from "next/link";
import Image from "next/image";
import PropTypes from 'prop-types'


const ProjectCard = ({ image, title, description, url, tags, date } : any) => {
  {/* Project Card with rounded corners and dark background smooth and modern with shadow*/}  
    return (
      <div className="bg-gray-900 rounded-md shadow-md">
        <div className="relative h-48 w-full">
          <Image src={image} layout="fill" objectFit="cover" className="rounded-t-md" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
          <div className="flex flex-row space-x-2">
            {tags.split(",").map((tag: string) => (
              <div key={tag} className="px-2 py-1 bg-gray-700 rounded-md text-sm font-semibold">
                {tag}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
        <div className="flex justify-end">
          <Link href={url}>
            <a className="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-bl-md rounded-br-md">
              View
            </a>
          </Link>
        </div>
      </div>
    );
  };

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  tags: PropTypes.array,
  date: PropTypes.string
}

const Project_grid = () => {

    return (
      <div>
        {/* Search Filter bar */}
        {/* <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-row items-center space-x-2">
              <label htmlFor="search" className="text-gray-500">Search</label>
              <input type="text" name="search" id="search" className="border-2 border-gray-200 rounded-md pl-2" />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <label htmlFor="category" className="text-gray-500">Category</label>
              <select name="category" id="category" className="border-2 border-gray-200 rounded-md pl-2">
                <option value="all">All</option>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="game">Game</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <label htmlFor="sort" className="text-gray-500">Sort</label>
            <select name="sort" id="sort" className="border-2 border-gray-200 rounded-md pl-2">
              <option value="date">Date</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div> */}

          {/* Project Card Grid  with flex*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProjectCard
              image="/images/nextjs.png"
              title="Next.js"
              description="The React Framework for Production"
              url="https://nextjs.org/"
              tags={["React", "Next.js", "TypeScript", "Example"]}
              date="2021-09-04"
            />
            <ProjectCard
              image="/images/nextjs.png"
              title="Next.js"
              description="The React Framework for Production"
              url="https://nextjs.org/"
              tags={["React", "Next.js", "TypeScript", "Example"]}
              date="2021-09-04"
            />
            <ProjectCard
              image="/images/nextjs.png"
              title="Next.js"
              description="The React Framework for Production"
              url="https://nextjs.org/"
              tags={["React", "Next.js", "TypeScript", "Example"]}
              date="2021-09-04"
            />
            <ProjectCard
              image="/images/nextjs.png"
              title="Next.js"
              description="The React Framework for Production"
              url="https://nextjs.org/"
              tags={["React", "Next.js", "TypeScript", "Example"]}
              date="2021-09-04"
            />
        </div>
      </div>
    );
  };
  
  export default Project_grid;