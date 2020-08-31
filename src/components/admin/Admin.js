import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default () => (
  <Container>
    <h1 className="section-title">Admin Panel.</h1>
    <Link to="/admin/work"><Button>作品編集</Button></Link>
    <Link to="/admin/blog"><Button>ブログ編集</Button></Link>
  </Container>
);
