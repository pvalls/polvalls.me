import * as React from 'react';
import Img from 'gatsby-image';
import { PaddingContainer } from '../styles/custom-styled-components';
import { ExperienceDataNoTech, TimelineDataObject} from '../types';

const PLYZER: ExperienceDataNoTech = {
  id: 'PLYZER',
  period: 'December 2019 - Now',
  title: 'Software Developer',
  place: 'Barcelona, Spain',
  headingIcon: 'fa-rocket',
  company: 'Plyzer Technologies',
  iconURL: 'PLYZER.png',
  about: [
    <div key="plyzer-resp-1">
    <b>Artificial Intelligence team (AI Team).</b>
    </div>,
  ],
  responsabilities: [
    <div key="plyzer-resp-1">
      Research and development of AI solutions for Plyzer.
      {/* Development and maintenance of the core backend systems of the Business Intelligence tools. */}
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
        <figcaption></figcaption>
      </figure>
    </div>
    </div>
  ),
};


const dataObject: TimelineDataObject[] = [

  { id: 'header', medium: false, data: '2019' },
  { id: 'item', data: PLYZER },
];

// Data object
export default dataObject;
