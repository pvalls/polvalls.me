import * as React from 'react';
import Img from 'gatsby-image';
import { PaddingContainer } from '../styles/custom-styled-components';
import { ExperienceData, TimelineDataObject} from '../types';


const SCYTL: ExperienceData = {
  id: 'SCYTL',
  period: 'December 2018 - May 2019',
  title: 'Software Engineer - QA Internship',
  place: 'Barcelona, Spain',
  headingIcon: 'fa-robot',
  company: 'Scytl Secure Electronic Voting SA',
  iconURL: 'SCYTL_logo.png',
  about: [
    <div key="scytl-about-1">
      <b>Quality Assurance team (QA)</b>.
    </div>,
  ],
  responsabilities: [
    <div key="scytl-resp-1">
      Release management, testing of scalability, 
      maintainability, usability, device compatibility, performance and security.
    </div>,
    <div key="scytl-resp-2">
      Building and delivering QA documentation.
    </div>,
    <div key="scytl-resp-3">
      Bug reporting and tracking. 
    </div>,
  ],
  technologies: [
    <div key="scytl-tech-1">
      <b>Source code control:</b><i>Python, Java, HTML, PHP, Javascript</i> with <b>Git</b>.{' '}
    </div>,
    <div key="scytl-tech-2">
      <b>Workflows:</b> with Jira, TestRail, Skype Business, etc.{' '}
    </div>,
    <div key="scytl-tech-3">
      <b>Others:</b> Unix Bash shell, Open-stack, Ansible, Docker, Linux servers, 
      Splunk, PostMan, PuTTY, Microsoft Office Automation. Configuration 
      of Interacative Voice Response systems (IVR).
    </div>,
  ],
  // accomplishments: [
  //   <div key="medtech-acc-1">
  //     <b>Lead developer</b> of an application that helps doctors come to a better diagnosis on Twin-to-Twin Transfussion
  //     Syndrome
  //   </div>,
  //   <div key="medtech-acc-2">Delivered a functional prototype at IDIBAPS meeting the goals of the project</div>,
  //   <div key="medtech-acc-3">
  //     Presented a poster at the CARS (Computer Assisted Radiology and Surgery) conference about Deep Brain Stimulation
  //   </div>,
  // ],
  additional_content: data => (
    // <div className="tile is-ancestor">
    //   <div className="tile is-7 is-vertical is-parent">
    //     <div className="tile is-child">
    //       <figure className="image">
    //         <Img fluid={data['SCYTL_2'].childImageSharp.fluid} />
    //         <figcaption>Scytl Offices.</figcaption>
    //         <Img fluid={data['SCYTL_1'].childImageSharp.fluid} />
    //         <figcaption>Scytl chill-out</figcaption>
    //       </figure>
    //     </div>
    //   </div>
    // </div>

    <div className="columns">
    <div className="column is-half no-padding">
      <figure className="image">
        <Img fluid={data['SCYTL_2'].childImageSharp.fluid} />
        <figcaption>Scytl Offices.</figcaption>
      </figure>
    </div>
    <div className="column no-padding">
      <figure className="image">
        <Img fluid={data['SCYTL_1'].childImageSharp.fluid} />
        <figcaption>Scytl chill-out.</figcaption>
      </figure>
    </div>
    </div>
  ),
};

const CUATRECASAS: ExperienceData = {
  id: 'CUATRECASAS',
  period: 'March 2018 - September 2018',
  title: 'Software Developer Internship',
  place: 'Barcelona, Spain',
  headingIcon: 'fa-book',
  company: "CUATRECASAS GONCALVES PEREIRA SLP",
  iconURL: 'CUATRECASAS.jpg',
  about: [
    <div key="cuatrecasas-about-1">
      <b>"Innovation &amp; Applications Consulting" department internship. </b>
    </div>,
  ],
  responsabilities: [
    <div key="cuatrecasas-resp-1">
      Support with programming and testing in different development projects. Project management methodology.
    </div>,
  ],
  technologies: [
    <div key="cuatrecasas-tech-1">
      <b>Web development:</b> HTML 5, CSS3, Javascript, Typescript, React, Bootstrap. I build the "Fundació CUATRECASAS" website.
    </div>,
    <div key="cuatrecasas-tech-2">
      <b>HotDocs.</b> Word documents automation. Deployment of software such as "LexNet Tools".
    </div>,
    <div key="cuatrecasas-tech-3">
      <b>Other:</b> .NET, PHP, MySQL. TFS servers.
    </div>,
  ],
  additional_content: data => (
    <div className="columns">
      <div className="column is-half no-padding">
        <figure className="image">
          <Img fluid={data['CUATRECASAS_1'].childImageSharp.fluid} />
          <figcaption>Cuatracasas offices.</figcaption>
        </figure>
      </div>
      <div className="column no-padding">
        <figure className="image">
          <Img fluid={data['CUATRECASAS_2'].childImageSharp.fluid} />
          <figcaption>CUATRECASAS Building (Poblenou 22@).</figcaption>
        </figure>
      </div>
    </div>
  ),
};


const TECHIE: ExperienceData = {
  id: 'TECHIE',
  period: 'May 2017 - December 2017',
  title: 'Head Of Technology',
  headingIcon: 'fa-brain',
  place: 'Girona, Spain',
  company: "Techie Products & Systems",
  iconURL: 'TECHIE.jpg',
  about: [
    <div key="TECHIE-resp-1">
      <b>Technology consultant</b> for a newly created company.
    </div>,
  ],
  responsabilities: [
    <div key="TECHIE-resp-1">
    Responsible for the logo, domain, DNS, corporative mail, 
    website,  social networks, media coverage and general tech assessment.
    </div>,
  ],
  technologies: [
    <div key="TECHIE-tech-1">
      <b>Web development.</b>
    </div>,
    <div key="TECHIE-tech-2">
      <b>Adobe CC.</b> Logo, media coverage and marketing.
    </div>,
    <div key="TECHIE-tech-2">
    <b>Google GSuite</b>, GoDaddy domain.
    </div>,
  ],
  additional_content: data => (
    <div className="column no-padding">
      <div className="column is-two-thirds no-padding">
        <figure className="image">
          <Img fluid={data['TECHIE_1'].childImageSharp.fluid} />
          <figcaption>Techie at the BCN PISCINA &amp;  WELLNESS Fair.</figcaption>
        </figure>
      </div>
    </div>
  ),
};


const dataObject: TimelineDataObject[] = [

  { id: 'header', medium: false, data: '2019' },
  { id: 'item', data: SCYTL },
  { id: 'header', medium: false, data: '2018' },
  { id: 'item', data: CUATRECASAS },
  { id: 'header', medium: true, data: '2017' },
  { id: 'item', data: TECHIE },
  { id: 'header', medium: true, data: '2016' },

];

// Data object
export default dataObject;
