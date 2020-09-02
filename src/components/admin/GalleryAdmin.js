/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { firebase } from '../firebase/firebase';
import { getWorkList, addWork } from '../firebase/firestore';
import Items from './gallery/Items';

const GalleryAdmin = ({ items }) => {
  const addItem = () => {
    addWork({
      title: '仮タイトル',
      description: '仮説明',
      tags: [],
      link: '',
      sourcecode: '',
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date()),
    }).then(() => {
      useRouter().reload();
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

GalleryAdmin.getServerSideProps = async () => {
  const items = await getWorkList();
  return { props: { items } };
};
