import React from 'react';
import Container from 'react-bootstrap/Container';
import App from '../components/App';
import BlogCard from '../components/blog/BlogCard';
import { getBlogList } from '../components/firebase/firestore';

const Blog = ({ items }) => (
  <>
    <App>
      <Container className="main-content">
        <h1 className="section-title">Blog</h1>
        {items.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </Container>
    </App>
  </>
);

export const getServerSideProps = async () => {
  const items = await getBlogList();
  return { props: { items } };
};

export default Blog;
