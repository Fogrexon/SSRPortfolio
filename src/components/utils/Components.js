import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import { Parallax } from 'rc-scroll-anim';

export const BigTitle = ({ title, children }) => (
  <Jumbotron className="jumbotron-fullheight jumbo-vertical-center text-center">
    <Container>
      <h1>{ title }</h1>
      <div className="lead">
        { children }
      </div>
    </Container>
  </Jumbotron>
);

export const Content = ({ children }) => (
  <Container style={{ margin: '30px auto' }}>
    { children }
  </Container>
);

export const SectionTitle = ({ title }) => (
  <div className="section-outer">
    <Parallax
      animation={{ letterSpacing: 10, opacity: 1 }}
      style={{
        letterSpacing: 0,
        opacity: 0,
      }}
    >
      <h1 className="text-center section-title">
        {title}
      </h1>
    </Parallax>
  </div>
);
