import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Footer from '../../components/footer'
import Header from '../../components/header'

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

export async function getStaticProps({ params: { project  } } : any) {
    const fileName = fs.readFileSync(`projects/${project}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
}

export default function ProjectPage({ frontmatter, content } : any) {
    return (
      <div className='prose mx-auto'>
        <Header />
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <Footer />
      </div>
    );
  }