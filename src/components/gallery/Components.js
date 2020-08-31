import React from 'react';
import { Parallax, Element as ScrollElement } from 'rc-scroll-anim';
import { getWorkList } from '../firebase/firestore';

import Information from './Information';
import style from './Gallery.module.scss';
import noImage from '../images/galleries/noimage.png';

export const GalleryCard = ({ item, index }) => {
  let { src } = item;
  const { title } = item;
  src = src || noImage;

  const id = `card_${index}`;

  return (
    <ScrollElement className={style.card_bg} id={id}>
      <Parallax
        animation={[
          {
            translateY: '0%',
            opacity: 0.2,
            playScale: [0, 1],
          },
          {
            translateY: '-20%',
            opacity: 0,
            playScale: [0, 1],
          },
        ]}
        style={{
          opacity: 0,
          transform: 'translateY(20%)',
        }}
        location={id}
        className={style.card_img_container}
      >
        <img src={src} className={style.card_bg_img} alt={title} />
      </Parallax>
      <div className={style.detail_outer}>
        <Information item={item} index={index} />
      </div>
    </ScrollElement>
  );
};

export default () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(
    () => {
      getWorkList().then((workList) => {
        setItems(workList);
      });
    },
    [],
  );

  return (
    <div className="main-section">
      {items.map((item, index) => (
        <GalleryCard item={item} index={index} key={item.title} />
      ))}
    </div>
  );
};
