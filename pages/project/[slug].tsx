import fs from 'fs';
import matter from 'gray-matter';
import md from "markdown-it";
import Head from 'next/head';
import Footer from '../../components/footer'
import Header from '../../components/header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export async function getStaticPaths() {
    const files = fs.readdirSync('content');
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
    const fileName = fs.readFileSync(`content/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }

  export default function PostPage({ frontmatter, content }: any) {
    return (
      <div>
        <Head>
          <title>dwag - {frontmatter.metaTitle}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={frontmatter.metaDesc} />
        </Head>
        <Header />
        <div className="min-h-screen">
          <div className='prose prose-invert mx-auto mt-12 mb-12 break-words'>
            <h1>{frontmatter.title}</h1>
            <div className="flex gap-6">
              {frontmatter.website && (
                <div>
                  <Link href={frontmatter.website}>
                    <a target="_blank" rel="noopener noreferrer" className="text-white mt-5 px-4 no-underline bg-blue-500 rounded-md h-10 text-base sm:text-lg hover:bg-gray-700 hover:-translate-y-1 duration-200 ease-in-out transition flex gap-2 items-center justify-center">
                      <FontAwesomeIcon icon={faGlobe} /> Project Website
                    </a>
                  </Link>
                </div>
              )}
              {frontmatter.github && (
                <div>
                  <Link href={frontmatter.github}>
                    <a target="_blank" rel="noopener noreferrer" className="text-white mt-5 px-4 no-underline bg-blue-500 rounded-md h-10 text-base sm:text-lg hover:bg-gray-700 hover:-translate-y-1 duration-200 ease-in-out transition flex gap-2 items-center justify-center">
                      <FontAwesomeIcon icon={faCode} /> GitHub
                    </a>
                  </Link>
                </div>
              )}
            </div>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }