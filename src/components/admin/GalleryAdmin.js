/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { firebase } from '../firebase/firebase';
import { getWorkList, addWork } from '../firebase/firestore';
import Items from './gallery/Items';

export default () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getWorkList().then((list) => {
      setItems(list);
    });
  }, []);

  const addItem = () => {
    addWork({
      title: '仮タイトル',
      description: '仮説明',
      tags: [],
      link: '',
      sourcecode: '',
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date()),
    }).then(() => {
      getWorkList().then((workList) => {
        setItems(workList);
      });
    });
  };

  return (
    <Container>
      <h1 className="section-title">Gallery Editing</h1>
      {
        items.map((item) => <Items key={item.id} {...item} />)
      }
      <Button onClick={addItem}>AddItem</Button>
    </Container>
  );
};
