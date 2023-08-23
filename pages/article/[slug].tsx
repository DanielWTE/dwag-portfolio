import fs from 'fs';
import matter from 'gray-matter';
import md from "markdown-it";
import Head from 'next/head';
import Footer from '../../components/footer'
import Header from '../../components/header'

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
          <meta name="keywords" content={frontmatter.metaKeywords} />
        </Head>
        <Header />
        <div className="min-h-screen">
          <div className='prose prose-invert mx-auto mt-12 mb-12 break-words'>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }