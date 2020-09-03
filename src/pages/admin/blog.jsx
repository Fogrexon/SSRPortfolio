/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { firebase } from '../../components/firebase/firebase';
import { getBlogList, addBlog } from '../../components/firebase/firestore';
import style from '../../components/admin/Items.module.scss';
import App from '../../components/App';
import Auth from '../../components/utils/Auth';

const metadata = {
  title: 'Admin Blog Panel',
  description: '',
};

const BlogCard = ({ item }) => (
  <Card key={item.id} className={style.card}>
    <Card.Title>
      <Link href={`/admin/blog/${item.id}`}>{`${item.createdAt} - ${item.title}`}</Link>
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
const BlogListEditing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getBlogList().then((list) => {
      setItems(list);
    });
  }, []);

  const addItem = () => {
    addBlog({
      title: '仮タイトル',
      content: '仮コンテンツ',
      tags: [],
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    }).then(() => {
      getBlogList().then((workList) => {
        setItems(workList);
      });
    });
  };

  return (
    <App metadata={metadata}>
      <Auth>
        <Container>
          <h1 className="section-title">Blog Editing</h1>
          {
            items.map((item) => <BlogCard key={item.id} item={item} />)
          }
          <Button onClick={addItem}>AddItem</Button>
        </Container>
      </Auth>
    </App>
  );
};

export default BlogListEditing;
