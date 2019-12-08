import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import { FixedHeaderContainer, ContentContainer } from '../styles/custom-styled-components';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Honors from './Honors';
import Certifications from './Certifications';
import Contact from './Contact';
import ParticlesData from '../data/particles_data';
import Footer from '../components/Footer';
import SectionBar from '../components/SectionBar';
import Particles from 'react-particles-js';
import '../styles/index.sass';

const Main = () => {
  return (
    <section className="hero is-default is-bold" id="main">
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Hi, I'm Pol Valls</title>
        <meta name="description" content="Personal Website of Pol Valls" />
      </Helmet>
      <FixedHeaderContainer>
        <Particles params={ParticlesData} style={{ position: 'fixed' }} />
        <Header name="Pol Valls" role="Software Developer. Audiovisual telecommunication systems engineer." />
      </FixedHeaderContainer>
      <ContentContainer>
        <div className="column is-two-thirds is-offset-2">
          <SectionBar />
          <Experience />
          <Education />
          <Skills />
          <Honors />
          <Certifications />
          <Contact />
        </div>
      </ContentContainer>
      <Footer />
    </section>
  );
};

export default Main;
