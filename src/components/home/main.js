import React from 'react';
import Galleries from './Components';
import { BigTitle, Content } from '../utils/Components';
import '../App.scss';

export default () => (
  <>
    <BigTitle title="Welcome to Fogrex&apos;s Portfolio">
      これはFogrexのポートフォリオサイトになります。今まで僕が作った作品などを展示しています。
    </BigTitle>
    <Content>
      <Galleries />
    </Content>
  </>
);
