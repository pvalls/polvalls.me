import * as React from 'react';
import Img from 'gatsby-image';
import { PaddingContainer } from '../styles/custom-styled-components';
import { TimelineDataObject, EntrepreneurData} from '../types';

  const BLUEYE: EntrepreneurData = {
  id: 'BLUEYE',
  period: 'November 2019',
  title: 'Entrepreneur at BluEye Computer Vision Solutions SL',
  headingIcon: 'fa-rocket',
  place: 'Barcelona, Spain',
  iconURL: 'BLUEYE_white.png',
  company: '',
  about: [
    <div key="BLUEYE-resp-1">
      <b>BluEye Computer Vision Solutions</b> is a startup business project
       in the making, revolving around  computer vision, video analytics, 
       pattern recognition, people counting, swimming pools and security for the public
        administration infrastructure.
    </div>,
  ],
  additional_content: data => (
    <div className="tile is-ancestor">
      { <div className="tile is-parent is-12 is-vertical">
        <div className="tile is-child is-12">
          <figure className="image is96x96">
            <Img fluid={data['BLUEYE_1'].childImageSharp.fluid} />
            <figcaption>BluEye anti-drowning concept.</figcaption>
          </figure>
        </div>
      </div>
      }
    </div>
  ),
};

const dataObject: TimelineDataObject[] = [
  // { id: 'header', medium: true, data: 'Now' },
  // { id: 'item', data: BLUEYE },
];

// Data object
export default dataObject;
