import React from 'react';
import App from '../components/App';
import Galleries from '../components/home/Components';
import { BigTitle, Content } from '../components/utils/Components';

import { getWorkList } from '../components/firebase/firestore';

const metadata = {
  title: "Fogrex's website",
  description: 'これはFogrexのポートフォリオサイトです。自分の過去の作品の展示やブログがあります。',
  ogp: true,
};

const Index = ({ items }) => (
  <>
    <App metadata={metadata}>
      <BigTitle title="Welcome to Fogrex&apos;s Portfolio">
        これはFogrexのポートフォリオサイトになります。今まで僕が作った作品などを展示しています。
      </BigTitle>
      <Content>
        <Galleries items={items} />
      </Content>
    </App>
  </>
);

export const getServerSideProps = async () => {
  const items = await getWorkList(2);
  return { props: { items } };
};

export default Index;
