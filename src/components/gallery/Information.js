import React from 'react';
import {
  Button, Badge, Container,
} from 'react-bootstrap';

import Line from './Line';
import style from './Gallery.module.scss';

export default ({
  item, index,
}) => {
  const {
    title, tags, description, link, sourcecode,
  } = item;
  return (
    <Container className={style.detail_inner}>
      <Line delay={0}>
        <h2>
          {`#${index + 1} ${title}`}
        </h2>
      </Line>
      <Line>
        <div>
          {
            tags.map((tag) => (
              <Badge variant="secondary" key={tag} style={{ borderRadius: '10px', margin: '2px' }}>{tag}</Badge>
            ))
          }
        </div>
      </Line>
      <Line>
        <p>
          {description}
        </p>
      </Line>
      <Line>
        <Button variant="primary" href={link} key="play" disabled={!link}>Link</Button>
        <Button variant="secondary" href={sourcecode} key="source" disabled={!sourcecode}>Source</Button>
      </Line>
    </Container>
  );
};
