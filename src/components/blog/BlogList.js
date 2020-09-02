import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Link from 'next/link';
import { getBlogList } from '../firebase/firestore';
import style from './Blog.module.scss';

const formatDate = (date, _format) => {
  let format = _format || 'YYYY-MM-DD hh:mm:ss';
  format = format.replace(/YYYY/g, date.getFullYear());
  format = format.replace(/MM/g, (`0${date.getMonth() + 1}`).slice(-2));
  format = format.replace(/DD/g, (`0${date.getDate()}`).slice(-2));
  format = format.replace(/hh/g, (`0${date.getHours()}`).slice(-2));
  format = format.replace(/mm/g, (`0${date.getMinutes()}`).slice(-2));
  format = format.replace(/ss/g, (`0${date.getSeconds()}`).slice(-2));
  return format;
};

const BlogCard = ({ item }) => (
  <Card key={item.id} className={style.card}>
    <Card.Title>
      <Link href={`/blog/${item.id}`}>{`${formatDate(item.createdAt.toDate(), 'YYYY年MM月DD日')} - ${item.title}`}</Link>
    </Card.Title>
    <div>
      {item.tags.map((tag) => (
        <Badge variant="secondary" key={tag} style={{ borderRadius: '10px', margin: '2px' }}>{tag}</Badge>
      ))}
    </div>
    <Card.Body>
      {`${item.content.slice(0, 60)}...`}
    </Card.Body>
  </Card>
);

const BlogList = ({ items }) => (
  <>
    <Container className="main-content">
      <h1 className="section-title">Blog</h1>
      {items.map((item) => (
        <BlogCard key={item.id} item={item} />
      ))}
    </Container>
  </>
);

BlogList.getServerSideProps = async () => {
  const items = await getBlogList();
  return { props: { items } };
};
