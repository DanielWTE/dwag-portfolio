import Image from 'next/image'
import Link from 'next/link';

const About = () => {
    return (
    <div className="bg-gray-900 min-h-100vh clear-both flex align-center justify-center mt-28">
        <div className="flex flex-col align-center justify-center text-center mx-10 mt-10 mb-10">
            <h1 className="font-bold text-5xl text-white mb-5">About</h1>
            <p className="text-lg font-normal text-white mb-5 max-h-100 break-word max-w-6xl">
                {/* Random Color Text */}
                {/* <p>My name is <span className="text-blue-500">Daniel Wagner</span> and I am a <span className="text-green-500">web developer</span>.
                I enjoy building web apps using a variety of tools such as <span className="text-red-500">HTML</span>, <span className="text-red-500">JavaScript</span>, <span className="text-red-500">JQuery</span>, <span className="text-red-500">PHP</span>, <span className="text-red-500">MySQL</span>, <span className="text-red-500">MongoDB</span> and recently, <span className="text-red-500">TypeScript</span> with frameworks like <span className="text-red-500">NextJS</span> and <span className="text-red-500">Tailwind CSS</span>.
                In addition to my development skills, I also have experience in <span className="text-green-500">system administration</span>.
                I have built and maintain my own <span className="text-green-500">network</span> at home where I host my applications, including this website which runs on a cluster of dedicated Dell and HP servers that are virtualized using <span className="text-red-500">Proxmox</span>.
                Currently, I am also exploring <span className="text-purple-500">Python</span> and experimenting with various things like scraping and AI.
                </p> */}

                {/* Blue Text */}
                {/* <p>My name is <span className="text-blue-500">Daniel Wagner</span> and I am a <span className="text-blue-500">software developer</span>.
                I enjoy building web apps using a variety of tools such as <span className="text-blue-500">HTML</span>, <span className="text-blue-500">JavaScript</span>, <span className="text-blue-500">JQuery</span>, <span className="text-blue-500">PHP</span>, <span className="text-blue-500">MySQL</span>, <span className="text-blue-500">MongoDB</span> and recently, <span className="text-blue-500">TypeScript</span> with frameworks like <span className="text-blue-500">NextJS</span> and <span className="text-blue-500">Tailwind CSS</span>.
                In addition to my development skills, I also have experience in <span className="text-blue-500">system administration</span>.
                <br /><br />I have built and maintain my own <span className="text-blue-500">network</span> at home where I host my applications, including this website which runs on a cluster of dedicated Dell and HP servers that are virtualized using <span className="text-blue-500">Proxmox</span>.
                Currently, I am also exploring <span className="text-blue-500">Python</span> and experimenting with various things like scraping and AI.
                </p> */}

                {/* Bold Text */}
                <p>My name is <span className="font-bold">Daniel Wagner</span> and I am a <span className="font-bold">software developer</span>.
                    I enjoy building web apps using a variety of tools such as <span className="font-bold">HTML</span>, <span className="font-bold">JavaScript</span>, <span className="font-bold">JQuery</span>, <span className="font-bold">PHP</span>, <span className="font-bold">MySQL</span>, <span className="font-bold">MongoDB</span> and recently, <span className="font-bold">TypeScript</span> with frameworks like <span className="font-bold">NextJS</span> and <span className="font-bold">Tailwind CSS</span>.
                    In addition to my development skills, I also have experience in <span className="font-bold">system administration</span>.
                    <br /><br />I have built and maintain my own <span className="font-bold">network</span> at home where I host my applications, including this website which runs on a cluster of dedicated Dell and HP servers that are virtualized using <span className="font-bold">Proxmox</span>.
                    Currently, I am also exploring <span className="font-bold">Python</span> and experimenting with various things like scraping and AI.
                </p>
            </p>
        </div>
    </div>
    );
};

export default About;