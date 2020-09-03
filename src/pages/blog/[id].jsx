import React from 'react';
import Container from 'react-bootstrap/Container';
import App from '../../components/App';
import { getBlog } from '../../components/firebase/firestore';
import markdown from '../../components/markdown';
import style from '../../components/blog/Blog.module.scss';

const BlogPage = ({ blog, metadata }) => (
  <>
    <App metadata={metadata}>
      <Container>
        <div style={{ fontSize: '20px' }}>{blog.createdAt}</div>
        <h1 className="section-title">{blog.title}</h1>
        <div
          className={style.markdown_container}
          dangerouslySetInnerHTML={{ __html: markdown.render(blog.content) }}
        />
      </Container>
    </App>
  </>
);

export const getServerSideProps = async ({ query, req: { url } }) => {
  const { id } = query;
  const result = await getBlog(id);
  const blog = !result ? (
    {
      title: 'このブログは存在しません',
      content: '',
      createdAt: '',
      tags: [],
      images: [],
    }
  ) : result;

  const metadata = {
    title: blog.title,
    description: blog.content.slice(0, 20),
    ogp: true,
    tag: blog.tags,
    image: blog.images && blog.images.length > 0 ? blog.images[0].split('|')[1] : '',
    url,
  };
  return { props: { blog, metadata } };
};

export default BlogPage;
