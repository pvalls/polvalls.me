import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import Timeline from '../components/Timeline';
import ExperienceData from '../data/experience';
import EntrepreneurData from '../data/entrepreneur';
import { useStaticQuery, graphql } from 'gatsby';

//GraphQL Data
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 96, quality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

const imageDataExperience = graphql`
  query {
    BLUEYE_logo: file(relativePath: { eq: "BLUEYE_white.png" }) {
      ...fixedImage
    }

    BLUEYE_1: file(relativePath: { eq: "blueye-idea.png" }) {
      ...fluidImage
    }

    CUATRECASAS_logo: file(relativePath: { eq: "CUATRECASAS.jpg" }) {
      ...fixedImage
    }

    CUATRECASAS_1: file(relativePath: { eq: "cuatrecasas-office.png" }) {
      ...fluidImage
    }
    CUATRECASAS_2: file(relativePath: { eq: "cuatrecasas-office2.jpg" }) {
      ...fluidImage
    }
    
    SCYTL_logo: file(relativePath: { eq: "SCYTL_logo.png" }) {
      ...fixedImage
    }

    SCYTL_1: file(relativePath: { eq: "scytl-office1.png" }) {
      ...fluidImage
    }

    SCYTL_2: file(relativePath: { eq: "scytl-office2.png" }) {
      ...fluidImage
    }

    TECHIE_logo: file(relativePath: { eq: "TECHIE.jpg" }) {
      ...fixedImage
    }

    TECHIE_1: file(relativePath: { eq: "techie-fira.jpg" }) {
      ...fluidImage
    }

  }
`;

const Experience = () => {
  const data = useStaticQuery(imageDataExperience);
  return (
    <React.Fragment>
      <SectionHeader title="Experience" icon="fa-briefcase" />
      <Timeline itemType="entrepreneur" data={EntrepreneurData} images={data} />
      <Timeline itemType="experience" data={ExperienceData} images={data} />

    </React.Fragment>
  );
};

export default Experience;
