import React from 'react';
import App from '../components/App';
import { BigTitle } from '../components/utils/Components';
import GalleryCard from '../components/gallery/Components';
import { getWorkList } from '../components/firebase/firestore';
// import Gallery from '../components/gallery/main';

const metadata = {
  title: "Fogrex's gallery",
  description: 'Fogrexの作品展示場',
  ogp: true,
};

const Gallery = ({ items }) => (
  <>
    <App metadata={metadata}>
      <BigTitle title="Gallery">
        <p>
          ここではFogrexの制作物を展示しています
        </p>
      </BigTitle>
      <div className="main-section">
        {items.map((item, index) => (
          <GalleryCard item={item} index={index} key={item.title} />
        ))}
      </div>
    </App>
  </>
);

export const getServerSideProps = async () => {
  const items = await getWorkList();
  return { props: { items } };
};

export default Gallery;
