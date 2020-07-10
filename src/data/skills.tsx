import { SkillsData } from '../types';

const Languages = [
  { label: 'Spanish', value: 100 },
  { label: 'Catalan', value: 100 },
  { label: 'English', value: 94 },
  { label: 'French', value: 26 },
];

const Programming = [
  { label: 'Python', value: 65 },
  { label: 'C++', value: 45 },
  { label: 'Java', value: 45 },
];

const Web = [
  { label: 'HTML5, CSS', value: 60 },
  { label: 'JavaScript & Typescript',  value: 60 },
  { label: 'React.js, Three.js, Bootstrap, Gatsby, Bulma', value: 26 },
  { label: 'Node.js, REST APIs, mongoDB, MySQL', value: 26 },
];

const General = [
  { label: 'Bash. Shell scripting. (CLI)', value: 60 },
  { label: 'Git & version control', value: 80 },
  { label: 'Docker', value: 40 },
  { label: 'Cmake', value: 40 },
  // { label: 'Jenkins, Ansible, OpenStack', value: 40},
];

const  TECHNICALCOMPUTING = [
  { label: 'MATLAB/OCTAVE', value: 90 },
  { label: 'PureData', value: 65 },
  { label: 'LaTeX', value: 90 },
];

const OS = [
  { label: 'macOS', value: 95 },
  { label: 'Windows 10', value: 95 },
  { label: 'Linux', value: 75 },
  { label: 'Raspberry and development boards', value: 50 },
];

const OfficeSuits = [
  { label: 'Visual Studio Code, Jupyter Notebook', value: 70 },
  { label: 'PyCharm, Xcode, NetBeans', value: 70 },
  { label: 'Adobe CC: Photoshop, LightRoom', value: 50 },
  { label: 'Apple\'s FinalCut', value: 50 },
  { label: 'Canva, Snappa, MailChimp', value: 70 },
];

const Workflows = [
  { label: 'Microsoft Office: Excel, Word, PowerPoint', value: 80 },
  { label: 'Google Cloud: Docs, Sheets, Slides', value: 80 },
  { label: 'iWork: Numbers, Pages, Keynote.', value: 80 },
  { label: 'Jira, TestRail', value: 45 },
  { label: 'Trello', value: 80 },
  
];

const dataObject: SkillsData[] = [
  { title: 'Languages', data: Languages, color: 'info' },
  { title: 'General purpose imperative programming', data: Programming, color: 'primary' },
  { title: 'Full Stack development and DBMS', data: Web, color: 'success' },
  { title: 'General computing, CI/CD', data: General, color: 'warning' },
  { title: 'Computing and science', data: TECHNICALCOMPUTING, color: 'dark' },
  { title: 'Operative Systems and platforms', data: OS, color: 'danger' },
  { title: 'Software suits', data: OfficeSuits, color: 'primary' },
  { title: 'Workflows, project management', data: Workflows, color: 'info' },
];
export default dataObject;
