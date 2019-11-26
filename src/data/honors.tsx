import * as React from 'react';

const honors: HonorsData[] = [
  {
    id: 'hacklab_prize',
    title: "HACKLAB 2019 Entrepreneurship Awards: UPF In Time",
    issued: 'Universitat Pompeu Fabra, 2019',
    description: (
      <p>
      Second highest award at the Premis Hacklab ceremony organized by 
      the UPF, for the project UPF In Time, a schedules native app 
      connected to the UPF schedule service system.
      (FrontEnd: React Native. Backend: Python; Scrapy, Flask, MongoDB, Heroku). 
 <a href="https://drive.google.com/open?id=1DyxjS5hNmya0taU7AVAmSHqnJ9ETYq82"> Award certification.</a>
      </p>
    ),
  },
  {
    id: 'honors_subjects',
    title: 'Honors Distinction in Video and Image Encoding Systems',
    issued: 'Universitat Pompeu Fabra',
    description: <p>Awarded honors for best qualification overall, 9.6</p>,
  },
  {
    id: 'nura',
    title: '3rd place short film at the Manlleu Film Festival',
    issued: 'Malleu Film Festival',
    description: <p>Awarded 3rd place in the regional category for the short film NURA, 
      written, directed, filmed and edited by a team of 5.</p>,
  },
];

export default honors;
