/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { getBlog } from '../firebase/firestore';
import markdown from '../markdown';
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


export default (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    createdAt: new Date(0),
  });

  useEffect(
    () => {
      getBlog(id).then((blogdata) => {
        if (!blogdata) {
          setBlog({
            title: 'このブログは存在しません',
            content: '',
            createdAt: new Date(0),
          });
        } else {
          setBlog({
            ...blogdata,
            createdAt: blogdata.createdAt.toDate(),
          });
        }
      });
    },
    [],
  );
  return (
    <Container>
      <div style={{ fontSize: '20px' }}>{formatDate(blog.createdAt, 'YYYY年MM月DD日')}</div>
      <div
        className={style.markdown_container}
        dangerouslySetInnerHTML={{ __html: markdown.render(blog.content) }}
      />
    </Container>
  );
};
