import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import Timeline from '../components/Timeline';
import EducationData from '../data/education';
import { graphql, useStaticQuery } from 'gatsby';

const imageDataEducation = graphql`
  query {
    UPF_DEGREE_logo: file(relativePath: { eq: "UPF_LOGO.png" }) {
      ...fixedImage
    }
    UPF_DEGREE_1: file(relativePath: { eq: "upf-1.jpg" }) {
      ...fluidImage
    }
    UPF_DEGREE_2: file(relativePath: { eq: "upf-2.jpg" }) {
      ...fluidImage
    }
    IBACCALAUREATE_logo: file(relativePath: { eq: "IB.jpg" }) {
      ...fixedImage
    }
    IBACCALAUREATE_1: file(relativePath: { eq: "ib-germany.png" }) {
      ...fluidImage
    }
    IBACCALAUREATE_2: file(relativePath: { eq: "ib-class.png" }) {
      ...fluidImage
    }
    UPF_MASTER_logo: file(relativePath: { eq: "UPF_LOGO.png" }) {
      ...fixedImage
    }
    UPF_MASTER_1: file(relativePath: { eq: "paperpresentation.jpg" }) {
      ...fluidImage
    }
    UPF_MASTER_2: file(relativePath: { eq: "StaticSetup3.jpg" }) {
      ...fluidImage
    }
    UPF_MASTER_3: file(relativePath: { eq: "brain_simulation.png" }) {
      ...fluidImage
    }
  }
`;

const Education = () => {
  const data = useStaticQuery(imageDataEducation);
  return (
    <React.Fragment>
      <SectionHeader title="Education" icon="fa-book" />
      <Timeline itemType="education" data={EducationData} images={data} />
    </React.Fragment>
  );
};

export default Education;
