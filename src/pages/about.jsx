import React from 'react';
import App from '../components/App';
import { BigTitle } from '../components/utils/Components';
import AboutInfo from '../components/about/Components';

const About = () => (
  <>
    <App>
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
