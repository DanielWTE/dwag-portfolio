import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';
import Footer from '../../components/footer'
import Header from '../../components/header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export async function getStaticPaths() {
    const files = fs.readdirSync('projects');
    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.md', ''),
      },
    }));
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params: { slug } } : any) {
    const fileName = fs.readFileSync(`projects/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }

export default function PostPage({ frontmatter, content } : any) {
    return (
      <div>
        <Head>
          <title>dwag - {frontmatter.metaTitle}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={frontmatter.metaDesc} />
        </Head>
        <Header />
	      <div>
          <div className='prose prose-invert mx-auto mt-12 mb-12'>
            <h1>{frontmatter.title}</h1>
              <div className="flex justify-between gap-10">
                <a href={frontmatter.website} target="_blank" rel="noopener noreferrer" className="text-white sm:mt-10 mt-5 pt-5 bg-blue-500 rounded-md w-full sm:w-40 h-12 text-base sm:text-lg hover:bg-gray-700 hover:-translate-y-1 duration-200 ease-in-out transition">
                  <FontAwesomeIcon icon={faGlobe} /> Project Website
                </a>
                <a href={frontmatter.github} target="_blank" rel="noopener noreferrer" className="text-white sm:mt-10 mt-5 pt-5 bg-blue-500 rounded-md w-full sm:w-40 h-12 text-base sm:text-lg hover:bg-gray-700 hover:-translate-y-1 duration-200 ease-in-out transition">
                  <i className={`devicon-github-plain text-xl`} /> GitHub
                </a>
              </div>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
