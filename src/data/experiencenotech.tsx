import * as React from 'react';
import Img from 'gatsby-image';
import { PaddingContainer } from '../styles/custom-styled-components';
import { ExperienceDataNoTech, TimelineDataObject} from '../types';

const COATINGAI: ExperienceDataNoTech = {
  id: 'COATINGAI',
  period: 'December 2019 - Now',
  title: 'Software Engineer',
  place: 'Barcelona, Spain',
  headingIcon: 'fa-rocket',
  company: 'coatingAI',
  iconURL: 'COATINGAI-logo.png',
  about: [
    <div key="coatingai-resp-1">
    <b>Bringing artificial intelligence to the coating industry.</b>
    </div>,
  ],
  responsabilities: [
    <div key="coatingai-resp-1">
      Involved in all flavors of software development, 
      from supporting core product development with 
      computer vision and machine learning engineers, 
      to steering devops and automation operations, 
      quality assurance processes and full stack development.
    </div>,
  ],
  // technologies: [
  //   <div key="plyzer-tech-1">
  //     <b></b>
  //   </div>,
  // ],
  additional_content: data => (

    <div className="columns">
    <div className="column is-half no-padding">
      <figure className="image">
        <Img fluid={data['COATINGAI_1'].childImageSharp.fluid} />
        <figcaption> <a href="https://www.linkedin.com/feed/update/urn:li:activity:6937780225556508673/">coatingAI LinkedIn post.</a></figcaption>
      </figure>
    </div>
    <div className="column no-padding">
      <figure className="image">
        <Img fluid={data['COATINGAI_2'].childImageSharp.fluid} />
        <figcaption>coatingAI at paint expo 2022.</figcaption>
      </figure>
    </div>
    </div>
  ),
};

const PLYZER: ExperienceDataNoTech = {
  id: 'PLYZER',
  period: 'December 2019 - Now',
  title: 'Artificial Intelligence Engineer',
  place: 'Barcelona, Spain',
  headingIcon: 'fas fa-flag-checkered',
  company: 'Plyzer Technologies',
  iconURL: 'plyzer-logo.jpg',
  about: [
    <div key="plyzer-resp-1">
    <b>Artificial Intelligence Team (AI Team).</b>
    </div>,
  ],
  responsabilities: [
    <div key="plyzer-resp-1">
      Research, engineering and development of AI solutions for Plyzer.
    </div>,
    <div key="plyzer-resp-2">
      Development and maintenance of the core backend systems of the Business Intelligence tools.
   </div>,
  ],
  // technologies: [
  //   <div key="plyzer-tech-1">
  //     <b></b>
  //   </div>,
  // ],
  additional_content: data => (

    <div className="columns">
    <div className="column is-half no-padding">
      <figure className="image">
        <Img fluid={data['PLYZER_1'].childImageSharp.fluid} />
        <figcaption>Plyzer Offices.</figcaption>
      </figure>
    </div>
    <div className="column no-padding">
      <figure className="image">
        <Img fluid={data['PLYZER_2'].childImageSharp.fluid} />
        <figcaption>Plyzer logo at the time.</figcaption>
      </figure>
    </div>
    </div>
  ),
};


const dataObject: TimelineDataObject[] = [
  { id: 'header', medium: false, data: 'Now' },
  { id: 'item', data: COATINGAI },
  { id: 'header', medium: false, data: '2022' },
  { id: 'item', data: PLYZER },
];

// Data object
export default dataObject;
