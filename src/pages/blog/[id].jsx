import React from 'react';
import Container from 'react-bootstrap/Container';
import App from '../../components/App';
import { getBlog } from '../../components/firebase/firestore';
import markdown from '../../components/markdown';
import style from '../../components/blog/Blog.module.scss';

const BlogPage = ({ blog }) => (
  <>
    <App>
      <Container>
        <div style={{ fontSize: '20px' }}>{blog.createdAt}</div>
        <div
          className={style.markdown_container}
          dangerouslySetInnerHTML={{ __html: markdown.render(blog.content) }}
        />
      </Container>
    </App>
  </>
);

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const result = await getBlog(id);

  if (!result) {
    const blog = {
      title: 'このブログは存在しません',
      content: '',
      createdAt: new Date(0),
    };
    return { props: { blog } };
  }
  return { props: { blog: result } };
};

export default BlogPage;
