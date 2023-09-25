import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import homelabCover from '../public/homelabCover.png'
import solunCover from '../public/solunCover.png'
import bellebotCover from '../public/bellebotCover.png'
import scraperCover from '../public/scraperCover.png'
import educdiaCover from '../public/educdiaCover.png'
import anipicCover from '../public/anipicCover.png'
import animePortfolioCover from '../public/portfolioKanaArima.gif'
import kanpaibook from '../public/kanpaibook.png'


const ProjectCard = ({ image, title, description, url, tags, date } : any) => {
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
        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center w-full">
          {tags.map((tag : any) => (
            <div
              key={tag}
              className="px-2 py-1 m-1 text-sm font-medium text-gray-100 bg-gray-700 rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
        {/* Date */}
        <div className="flex items-center justify-center w-full">
          <p className="text-sm font-medium text-gray-400">{date}</p>
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
  tags: PropTypes.array,
  date: PropTypes.string
}

const Project_grid = () => {

    return (
      <div className="flex justify-center">
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
          <div className="flex justify-center flex-wrap gap-10 mt-24 mb-24 max-w-screen-xl">
            <ProjectCard
              image={homelabCover}
              title="Homelab"
              description="My Homelab is where I host and experiment with self-hosted services and applications."
              url="/project/homelab"
              tags={["Self-hosting", "Virtualization", "Automation", "Networking"]}
              date="Last Update 19.03.2023"
            />
            <ProjectCard
              image={solunCover}
              title="Solun"
              description="Solun is a service that allows you to share files, text and sending emails with end-to-end encryption."
              url="/project/solun"
              tags={["NextJS", "TypeScript", "Tailwind", "NPM", "MongoDB"]}
              date="Last Update 29.06.2023"
            />
            <ProjectCard
              image={kanpaibook}
              title="KanpaiBook"
              description="KanpaiBook is a platform for intuitive and interactive restaurant table reservations."
              url="/project/kanpaibook"
              tags={["NextJS", "TypeScript", "Tailwind", "ExpressJS", "MariaDB"]}
              date="Last Update 25.09.2023"
            />
            <ProjectCard
              image={bellebotCover}
              title="Discord Bot"
              description='I have developed a Discord bot with the name of a well-known actress of the somewhat "controversial" kind.'
              url="/project/discord-bot"
              tags={["NodeJS", "NPM", "TypeScript", "API", "DiscordJS"]}
              date="Last Update 10.12.2022"
            />
            <ProjectCard
              image={anipicCover}
              title="AniPic.co"
              description='AniPic.co is a website where you can find anime pictures which are categorized by AI. Currently in development.'
              url="/project/anipic"
              tags={["MongoDB", "Linux", "Python", "NextJS", "Docker"]}
              date="Last Update 19.03.2023"
            />
            <ProjectCard
              image={animePortfolioCover}
              title="Anime Portfolios"
              description="In this project I will create portfolios for different anime characters. My goal with this project is to improve my design skills."
              url="/project/anime-portfolios"
              tags={["NodeJS", "NPM", "TypeScript", "Tailwind", "Docker"]}
              date="Last Update 18.05.2023"
            />
            <ProjectCard
              image={scraperCover}
              title="Various Scrapers"
              description="I have developed tools to scrape content from popular online marketplaces and store it on my database."
              url="/project/scraper"
              tags={["Python", "PHP", "MongoDB", "Docker", "Linux"]}
              date="Last Update 13.02.2023"
            />
            <ProjectCard
              image={educdiaCover}
              title="Various short projects"
              description="E.G. I have built a student management software - with which a school can manage many student data more easily."
              url="/project/short-projects"
              tags={["PHP", "JavaScript", "MongoDB", "Composer"]}
              date="Last Update 02.02.2023"
            />
            {/* <ProjectCard
              image="/images/nextjs.png"
              title="Various timers"
              description="When do I get older or when does school end? Yes, I just created many websites with different timers :D"
              url="#"
              tags={["PHP", "HTML", "JavaScript", "CSS", "Nginx"]}
              date="2021-09-04"
            /> */}
        </div>
      </div>
    );
  };
  
  export default Project_grid;