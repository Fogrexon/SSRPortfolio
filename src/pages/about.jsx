import React from 'react';
import App from '../components/App';
import { BigTitle } from '../components/utils/Components';
import AboutInfo from '../components/about/Components';

const metadata = {
  title: 'About Fogrex',
  description: 'Fogrexの基本情報',
  ogp: true,
};

const About = () => (
  <>
    <App metadata={metadata}>
      <BigTitle title="Fogrex">
        <p>
          Fogrexの概要
        </p>
      </BigTitle>
      <AboutInfo />
    </App>
  </>
);

export default About;
