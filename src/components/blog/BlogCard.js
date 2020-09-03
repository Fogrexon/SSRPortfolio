import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Link from 'next/link';
import style from './Blog.module.scss';

const BlogCard = ({ item }) => (
  <Card key={item.id} className={style.card}>
    <Card.Title>
      <Link href={`/blog/${item.id}`}>{`${item.createdAt} - ${item.title}`}</Link>
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

export default BlogCard;
