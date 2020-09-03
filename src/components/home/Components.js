import React from 'react';
import {
  Card, Button, Badge,
} from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';

export const GalleryCard = ({ item }) => {
  let { src } = item;
  const {
    title, description, link, sourcecode, tags,
  } = item;
  src = src || '/images/galleries/noimage.png';
  return (
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div>{tags.map((tag) => (<Badge variant="secondary" key={tag} style={{ borderRadius: '10px', margin: '2px' }}>{tag}</Badge>))}</div>
        <Card.Text>{description.length > 50 ? `${description.slice(0, 50)}...` : description}</Card.Text>
        <Button variant="primary" href={link} key="play" disabled={!link}>Link</Button>
        <Button variant="secondary" href={sourcecode} key="source" disabled={!sourcecode}>Source</Button>
      </Card.Body>
    </Card>
  );
};

const HomeItems = ({ items }) => (
  <div className="main-section">
    <h1 className="section-title">Latest</h1>
    <CardColumns>
      {items.map((item, index) => (
        <GalleryCard item={item} index={index} key={item.title} />
      ))}
    </CardColumns>
  </div>
);

export default HomeItems;
