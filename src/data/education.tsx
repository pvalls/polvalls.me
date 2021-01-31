import * as React from 'react';
import Img from 'gatsby-image';
import { EducationData, TimelineDataObject} from '../types';

const UPF_DEGREE: EducationData = {
  id: 'UPF_DEGREE',
  headingIcon: 'fa-university',
  period: 'June 2015 - July 2019',
  place: 'Barcelona, Spain',
  iconURL: 'UPF_LOGO.png',
  university: 'Universitat Pompeu Fabra (UPF)',
  GPA: '7.75 / 10',
  degree: 'Audiovisual Telecommunication Systems Engineering Degree (Computer Sciences)',
  specialization: [

    <div key="spec-degree-1"><b>Pattern Recognittion.</b> (AI, machine learning, statistics)</div>,
    <div key="spec-degree-2"><b>Image Analysis and Interpretation.</b></div>,
    <div key="spec-degree-3"><b>Synthetic Image.</b> (Computer Graphics, ray-tracing)</div>,
    <div key="spec-degree-4"><b>Advanced Visualisation.</b> (Graphics, shaders, OpenGL)</div>,
    <div key="spec-degree-4"><b>Virtual Communication Environments.</b> (Development of Full stack web applications)</div>,
    <div key="spec-degree-4"><b>Perceptual Principles Applied to Design.</b></div>,
  ],
  courses: [
    <div key="spec-course-1"><b>Fundamentals of Computer Sciences</b>. Computational Logic, Databases, Object-Oriented Programming.</div>,
    <div key="spec-course-3"><b>Fundamental of Mathemathics and Physics</b>. Calculus &amp; Numeric Methods, Linear Algebra and Discrete Mathematics, Waves and Electromagnetism, Differential Equations, Statistics &amp; Stochastic Processes</div>,
    <div key="spec-course-3"><b>Fundamental on telecommunications</b>. Networks and Service protocols. Data Transmission and Encoding. </div>,
    <div key="spec-course-2"><b>Sound and Image Processing courses.</b>Sound and Music Processing, Voice &amp; Audio Encoding Systems,  Image and Video Encoding Systems, Video Processing. </div>,
    
  ],
  additional_content: data => (

    <div className="tile is-ancestor">
      <div className="tile is-parent is-12">

        <div className="tile is-parent is-6 is-vertical">
          <div className="tile">
            <figure className="image">
              <Img fluid={data['UPF_DEGREE_1'].childImageSharp.fluid} />
              <figcaption>We were pretty happy when graduating.</figcaption>
            </figure>
          </div>
          </div>

          <div className="tile is-6 is-vertical">
            <figure className="image">
              <Img fluid={data['UPF_DEGREE_2'].childImageSharp.fluid} />
              <figcaption>Best promotion ever.</figcaption>
            </figure>
        </div>
       </div>
      </div>
  ),
};

const IBACCALAUREATE: EducationData = {
  id: 'IBACCALAUREATE',
  headingIcon: 'fa-school',
  period: 'September 2013 - June 2015',
  place: 'Girona, Spain',
  iconURL: 'IB.jpg',
  university: 'INS Jaume Vicens Vives',
  GPA: '8 / 10',
  degree: 'International Baccalaureate Diploma (+ spanish baccalaureate)',
  specialization: [
    <div key="spec-rmit-1">2nd highest level baccalaureate class in Catalonia. Sciences specialization with high level 
    mathematics, physics, chemistry as well as philosophy and catalan language.</div>,
  ],
  courses: [
    <div key="course-rmit-1">IB Diploma subjects.</div>,
    <div key="course-rmit-2">Spanish Baccalaureate subjects. (LOE).</div>,
  ],
  additional_content: data => (

    <div className="tile is-ancestor">
      <div className="tile is-parent is-12">

          <div className="tile is-6 is-vertical">
            <figure className="image">
              <Img fluid={data['IBACCALAUREATE_2'].childImageSharp.fluid} />
              <figcaption>The class.</figcaption>
            </figure>
          </div>

          <div className="tile is-parent is-5 is-vertical">
          <div className="tile">
            <figure className="image">
              <Img fluid={data['IBACCALAUREATE_1'].childImageSharp.fluid} />
              <figcaption>We also had some time to travel to Bamberg, Germany.</figcaption>
            </figure>
          </div>
          </div>
       </div>
      </div>
  ),
};

// const UPF_MASTER: EducationData = {
//   id: 'UPF_MASTER',
//   headingIcon: 'fa-briefcase-medical',
//   period: 'September 2016 - July 2017',
//   university: 'Universitat Pompeu Fabra (UPF)',
//   place: 'Barcelona, Spain',
//   iconURL: 'UPF_LOGO.png',
//   GPA: '9.15 / 10',
//   degree: 'Msc. in Computational Biomedical Engineering',
//   specialization: [
//     <div key="spec-master-1">Algorithm programming in Python</div>,
//     <div key="spec-master-2">Application programming and Computer Graphics for Medical Data</div>,
//   ],
//   courses: [
//     <div key="course-master-1">
//       Courses on Machine Learning, Complexity Science, Advanced Signal Analysis, Surgery Planning
//     </div>,
//     <div key="course-master-2">
//       Academic Seminars on Machine Learning on Medicine and other topics organized by BCN MedTech
//     </div>,
//     <div key="course-master-3">Python and MATLAB Programming for Biomedical sciences</div>,
//   ],
//   additional_content: data => (
//     <div className="tile is-ancestor">
//       <div className="tile is-parent is-12">
//         <div className="tile is-child is-7">
//           <figure className="image">
//             <Img fluid={data['UPF_MASTER_1'].childImageSharp.fluid} />
//             <figcaption>
//               Presenting a paper on my results from the work and master thesis at the CARS 2017 conference.
//             </figcaption>
//           </figure>
//         </div>
//         <div className="tile is-parent is-vertical">
//           <div className="tile">
//             <figure className="image">
//               <Img fluid={data['UPF_MASTER_2'].childImageSharp.fluid} />
//               <figcaption>Project on Augmented Reality Tracking for fetal interventions.</figcaption>
//             </figure>
//           </div>
//           <div className="tile">
//             <figure className="image">
//               <Img fluid={data['UPF_MASTER_3'].childImageSharp.fluid} />
//               <figcaption>Simulation of Deep Brain Stimulation Electrode insertion using C++.</figcaption>
//             </figure>
//           </div>
//         </div>
//       </div>
//     </div>
//   ),
// };

const dataObject: TimelineDataObject[] = [
  { id: 'header', medium: true, data: 'Now' },
  // { id: 'item', data: UPF_MASTER },
  { id: 'item', data: UPF_DEGREE },
  { id: 'header', medium: true, data: '2015' },
  { id: 'item', data: IBACCALAUREATE },
  { id: 'header', medium: true, data: '2013' },
];

// Data object
export default dataObject;
