/* eslint-disable react/no-danger */
import React from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import { getBlog } from '../firebase/firestore';
import markdown from '../markdown';
import style from './Blog.module.scss';



const Blog = ({ blog }) => (
  <Container>
    <div style={{ fontSize: '20px' }}>{blog.createdAt}</div>
    <div
      className={style.markdown_container}
      dangerouslySetInnerHTML={{ __html: markdown.render(blog.content) }}
    />
  </Container>
);

Blog.getServerSideProps = async () => {
  const { id } = useRouter().query;
  const result = await getBlog(id);

  if (!result) {
    const blog = {
      title: 'このブログは存在しません',
      content: '',
      createdAt: new Date(0),
    };
    return { props: { blog } };
  }
  const blog = {
    ...result,
    createdAt: result.createdAt.toDate(),
  };
  return { props: { blog } };
};

export default Blog;
