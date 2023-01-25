import Image from 'next/image'
import Link from 'next/link';
import image from '../public/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faComputer } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { Grid, Card, Text } from "@nextui-org/react";


const Widget = ({ icon, text }) => {
    return (
    <div className={`bg-gray-800 p-4 rounded-xl flex items-center transition-colors duration-300 hover:bg-gray-600`}>
          <i className={`devicon-${icon}-plain text-xl`} />
          <div className="text-white">
              <h4 className="text-lg">&nbsp; {text}</h4>
          </div>
      </div>
    )
}

Widget.propTypes = {
    icon: PropTypes.string.isRequired,
}

const Skills = () => {
    return (
    <div className="bg-gray-900 min-h-100vh clear-both flex align-center justify-center mt-28">
        <div className="flex flex-col align-center justify-center text-center mx-10 mt-10 mb-1">
            <h1 className='font-bold text-5xl text-white flex flex-col align-center justify-center text-center'>
                Skills
            </h1>
        <div className="font-bold text-2xl text-white flex flex-col align-center justify-center text-center mt-10">
            <h1>
                Web
            </h1>
        </div>
            <div className="min-h-100vh clear-both flex align-center justify-center mt-6 flex-wrap gap-2">
                <Widget icon="html5" text="HTML" />
                <Widget icon="javascript" text="JavaScript" />
                <Widget icon="typescript" text="TypeScript" />
                <Widget icon="jquery" text="JQuery" />
                <Widget icon="php" text="PHP" />
                <Widget icon="css3" text="CSS" />
                <Widget icon="tailwindcss" text="TailwindCSS" />
                <Widget icon="react" text="React" />
                <Widget icon="nextjs" text="NextJS" />
                <Widget icon="wordpress" text="WordPress" />
            </div>
        <div className="font-bold text-2xl text-white flex flex-col align-center justify-center text-center mt-10">
            <h1>
                Applications
            </h1>
        </div>
        <div className="min-h-100vh clear-both flex align-center justify-center mt-6 flex-wrap gap-2">
            <Widget icon="python" text="Python" />
            <Widget icon="nodejs" text="NodeJS" />
        </div>
        <div className="font-bold text-2xl text-white flex flex-col align-center justify-center text-center mt-10">
            <h1>
                Databases
            </h1>
        </div>
        <div className="min-h-100vh clear-both flex align-center justify-center mt-6 flex-wrap gap-2">
            <Widget icon="mysql" text="MySQL" />
            <Widget icon="mongodb" text="MongoDB" />
        </div>
        <div className="font-bold text-2xl text-white flex flex-col align-center justify-center text-center mt-10">
            <h1>
                Tools
            </h1>
        </div>
            <div className="min-h-100vh clear-both flex align-center justify-center mt-6 flex-wrap gap-2">
                <Widget icon="git" text="Git" />
                <Widget icon="gitlab" text="GitLab" />
                <Widget icon="docker" text="Docker" />
                <Widget icon="linux" text="Linux" />
                <Widget icon="nginx" text="Nginx" />
                <Widget icon="apache" text="Apache" />
                <Widget icon="selenium" text="Selenium" />
                <Widget icon="vscode" text="Visual Studio Code" />
                <Widget icon="jetbrains" text="JetBrains" />
            </div>
        <div className="font-bold text-2xl text-white flex flex-col align-center justify-center text-center mt-10">
            <h1>
                Cloud
            </h1>
        </div>
            <div className="min-h-100vh clear-both flex align-center justify-center mt-6 flex-wrap gap-2">
                <Widget icon="amazonwebservices" text="AWS" />
                <Widget icon="googlecloud" text="Google Cloud" />
                <Widget icon="azure" text="Azure" />
                <Widget icon="digitalocean" text="Digital Ocean" />
            </div>
        </div>
        </div>
    );
};
export default Skills;