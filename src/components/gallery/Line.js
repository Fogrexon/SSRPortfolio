import React from 'react';
import { Parallax } from 'rc-scroll-anim';

export default ({ children }) => (
  <Parallax
    animation={[
      {
        opacity: 1,
        translateX: 0,
        playScale: [0.1, 0.3],
      },
      {
        opacity: 0,
        translateX: 50,
        playScale: [0.4, 0.6],
      },
    ]}

    style={{
      transform: 'translateX(-50px)',
      opacity: 0,
    }}
  >
    {children}
  </Parallax>
);
