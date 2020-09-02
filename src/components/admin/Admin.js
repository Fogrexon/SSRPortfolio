import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default () => (
  <Container>
    <h1 className="section-title">Admin Panel.</h1>
    <Link href="/admin/work"><Button>作品編集</Button></Link>
    <Link href="/admin/blog"><Button>ブログ編集</Button></Link>
  </Container>
);
