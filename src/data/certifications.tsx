import * as React from 'react';

const honors: CertificationsData[] = [
  {
    id: 'DrivingLicence',
    title: "Driving License (AM, B & A1)",
    issued: 'Dirección General de Tráfico, 2015',
    description: (<p>Driving license for saloon cars and motorcycles.</p>),
  },
  {
    id: 'CAE',
    title: 'CAE Certificate in Advanced English',
    issued: 'Cambridge College, 2017',
    description: <p>CAE Certificate in Advanced English. Exam taken in Girona. Score:192/210.</p>,
  },
  {
    id: 'Git',
    title: 'Version Control with Git',
    issued: 'Atlassian (Coursera, 2019)',
    description: <p>Succesfully completed Atlassian's in-depth course on Git and version control with git.</p>,
  },
  {
    id: 'MachineLearning',
    title: 'Machine Learning',
    issued: 'Stanford Univerity (Coursera, 2020)',
    description: <p>Succesfully completed Andrew Ng's course on Machine Learning.</p>,
  },
];

export default honors;
