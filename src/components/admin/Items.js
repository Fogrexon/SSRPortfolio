import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { firebase } from '../firebase/firebase';
import { updateWork } from '../firebase/firestore';
import { uploadImage } from '../firebase/storage';

import style from './Items.module.scss';

const Items = ({
  title,
  description,
  tags,
  link,
  sourcecode,
  id,
  src,
}) => {
  const [itemstate, setItemState] = useState({
    title,
    description,
    tags: tags.join(' '),
    link,
    sourcecode,
    src,
  });
  const [activekey, setActivekey] = useState('');

  const changeState = (key, value) => {
    const stateDiff = { ...itemstate };
    stateDiff[key] = value;
    setItemState(stateDiff);
  };

  const onSelect = () => {
    setActivekey(activekey === '' ? id : '');
  };

  const updateItem = (e) => {
    e.preventDefault();
    updateWork(id, {
      title: itemstate.title,
      description: itemstate.description || '',
      tags: itemstate.tags.split(' '),
      link: itemstate.link || '',
      sourcecode: itemstate.sourcecode || '',
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date()),
      src: itemstate.src || '',
    }).then(() => {
      console.log('sended');
    });
  };

  const imageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    uploadImage(id, file).then((url) => {
      changeState('src', url);
    });
  };

  return (
    <Accordion activeKey={activekey}>
      <Card key={id} className={style.card}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={id} onClick={onSelect}>
            {itemstate.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={id}>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="title"
                  key="title"
                  onChange={(e) => { changeState('title', e.target.value); }}
                  value={itemstate.title}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="description"
                  key="description"
                  onChange={(e) => { changeState('description', e.target.value); }}
                  value={itemstate.description}
                  className={style.description_area}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="tags"
                  key="tags"
                  onChange={(e) => { changeState('tags', e.target.value); }}
                  value={itemstate.tags}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="link"
                  key="link"
                  onChange={(e) => { changeState('link', e.target.value); }}
                  value={itemstate.link}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Sourcecode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="sourcecode"
                  key="sourcecode"
                  onChange={(e) => { changeState('sourcecode', e.target.value); }}
                  value={itemstate.sourcecode}
                />
              </Form.Group>
              <Form.Group>
                <Form.File label="Sample Image File" onChange={imageChange} />
                <img src={itemstate.src} style={{ width: '100%' }} alt={`${itemstate.title}`} />
                <Form.Control
                  type="text"
                  key="src"
                  value={itemstate.src}
                  readOnly
                />
              </Form.Group>
              <Button type="submit" onClick={(e) => updateItem(e)}>Update</Button>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  );
};

export default Items;
