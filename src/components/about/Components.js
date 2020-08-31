/* eslint-disable import/named */
/* eslint-disable no-return-assign */
import React from 'react';
import { Parallax } from 'rc-scroll-anim';
import Container from 'react-bootstrap/Container';

import { SectionTitle } from '../utils/Components';
import icon from '../images/fogrex_icon.svg';
import style from './About.module.scss';
import iconStyle from '../navigations/Basics.module.scss';

const Subsection = ({ title, children }) => (
  <div className="sub-section">
    <Parallax
      animation={
        [
          { x: 0, opacity: 1, playScale: [0, 0.5] },
          { x: 0, opacity: 1, playScale: [0, 0.5] },
        ]
      }
      style={{
        transform: 'translateX(30px)',
        opacity: 0,
      }}
    >
      <h2 className="sub-section-title">
        {title}
      </h2>
      <p>
        {children}
      </p>
    </Parallax>
  </div>
);

export default () => (
  <>
    <SectionTitle title="Introduction" key="intro" />
    <Container>
      <Subsection title="Name" key="name">
        <strong>Fogrex</strong>
        (Fogrexonが正式名称ですが長いので最近はこっちの方が多いです)
      </Subsection>
      <Subsection title="Age" key="age">
        19歳(5/29生まれ)
      </Subsection>
      <Subsection title="Affiliation" key="affiliation">
        <ul className={style.list_style_none}>
          <li>
            東京工業大学情報工学系学部2年
          </li>
          <li>
            東京工業大学デジタル創作同好会traP
            (
            <a href="https://trap.jp/author/fogrex/">
              自分の記事
            </a>
            )
          </li>
          <li>
            東京工業大学ロボット技術研究会 CGSquare,VR研
          </li>
        </ul>
        <br />
        <br />
      </Subsection>
      <Subsection title="Interested in">
        Javascript(Nodejs React Vue) Typescript Go GLSL Unity 3DCGModeling Illust Gaming
      </Subsection>
      <Subsection title="Use">
        Javascript(Nodejs React) Go GLSL Unity
      </Subsection>
    </Container>

    <SectionTitle title="About Icon" key="icon" />
    <Container>
      <Subsection
        title={
          (
            <div className={style.fogrex_container}>
              <img src={icon} className={style.fogrex} alt="Big Fogrex Icon" />
            </div>
          )
        }
      >
        このアイコンは私のシンボルともいえるものです。3秒で書きました。私の公式のページやチャンネルにはいたるところに用いられています。以下にsvgファイルを置いておきます。
        <a href={icon}>SVG</a>
      </Subsection>
    </Container>
    <SectionTitle title="Contact" key="contact" />
    <Container>
      <Subsection className={style.fogrex_container}>
        <ul className={[style.list_style_none, style.padding].join(' ')}>
          <li>
            <a href="https://twitter.com/Faglexon" target="_blank" rel="noopener noreferrer">
              <i className={['fab fa-twitter', iconStyle.icons, iconStyle.twt].join(' ')} />
            </a>
            TwitterDM
          </li>
          <li>
            <a href="mailto:fogrexon@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className={['fas fa-envelope', iconStyle.icons, iconStyle.evp].join(' ')} />
            </a>
            Mail
          </li>
        </ul>
      </Subsection>
    </Container>
  </>
);
