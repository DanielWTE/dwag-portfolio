import Link from "next/link";
import Image from "next/image";
import PropTypes from 'prop-types'


const ProjectCard = ({ image, title, description, url, tags, date } : any) => {
    return (
      <div className="bg-white rounded-md shadow-md p-4">
        <div className="relative h-48 w-full">
          <Image src={image} layout="fill" objectFit="cover" className="rounded-md" />
        </div>
        <div className="flex flex-col justify-center items-start space-y-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-500">{description}</p>
          <div className="flex flex-row justify-between items-center w-full">
            <Link href={url}>
              <a className="text-blue-400">Learn More</a>
            </Link>
            <div className="flex flex-row items-center space-x-2">
              <span className="text-gray-500">{date}</span>
              <span className="text-gray-500">{tags}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  tags: PropTypes.string,
  date: PropTypes.string
}

const Project_grid = () => {

    return (
      <div>
        {/* Search Filter bar */}
        <div className="flex flex-row justify-between items-center w-full">
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
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            image="/img/project1.jpg"
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nec erat luctus tincidunt."
            url="#"
            tags="web, mobile, game"
            date="2021-01-01"
          />
          <ProjectCard
            image="/img/project2.jpg"
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nec erat luctus tincidunt."
            url="#"
            tags="web, mobile, game"
            date="2021-01-01"
          />
          <ProjectCard
            image="/img/project3.jpg"
            title="Project 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nec erat luctus tincidunt."
            url="#"
            tags="web, mobile, game"
            date="2021-01-01"
          />
          <ProjectCard
            image="/img/project4.jpg"
            title="Project 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nec erat luctus tincidunt."
            url="#"
            tags="web, mobile, game"
            date="2021-01-01"
          />
        </div>
      </div>
    );
  };
  
  export default Project_grid;