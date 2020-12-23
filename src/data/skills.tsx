import { SkillsData } from '../types';

const Languages = [
  { label: 'Spanish', value: 100 },
  { label: 'Catalan', value: 100 },
  { label: 'English', value: 96 },
  { label: 'French', value: 26 },
];

const Programming = [
  { label: 'Python', value: 90 },
  { label: 'Java', value: 60 },
  { label: 'C++', value: 45 },
  { label: 'C', value: 45 },
];

const Web = [
  { label: 'HTML5, CSS', value: 80 },
  { label: 'JavaScript & Typescript',  value: 65 },
  { label: 'Node.js, React.js, Three.js. Bootstrap, Gatsby', value: 34 },
  { label: 'REST APIs. Django. MySQL. mongoDB. graphDB (neo4j, cypher)', value: 40 },
];

const General = [
  { label: 'Bash, Zsh. General Shell scripting (CLI).', value: 80 },
  { label: 'Git & version control', value: 90 },
  { label: 'Conda, Tmux, Cron, rsync, ... ', value: 90 },
  { label: 'Docker', value: 60 },
];

const CloudComputing = [
  { label: 'AWS: EC2, Lambda, S3, Aurora RDS, Kinesis, SNS, SQS, ...', value: 75 },
  { label: 'Google Cloud.', value: 45 },
  { label: 'Heroku.', value: 45 },
  { label: 'Microsoft Azure.', value: 30 },
  { label: 'Jenkins, Ansible, OpenStack', value: 40},
];


const  TechnicalComputing = [
  { label: 'MATLAB/OCTAVE', value: 95 },
  { label: 'PureData', value: 65 },
  { label: 'R', value: 35 },
  { label: 'Markdown', value: 95 },
  { label: 'LaTeX', value: 95 },
];

const OS = [
  { label: 'macOS', value: 95 },
  { label: 'Windows 10', value: 95 },
  { label: 'Linux', value: 75 },
  { label: 'Raspberry and development boards', value: 50 },
];

const OfficeSuits = [
  { label: 'Visual Studio Code', value: 90 },
  { label: 'PyCharm, Xcode, Jupyter Notebooks', value: 75 },
  { label: 'Adobe CC: Photoshop, LightRoom', value: 50 },
  { label: 'Apple\'s FinalCut', value: 50 },
];

const Workflows = [
  { label: 'Github, gh-pages, gh-issues, gh-actions, ...', value: 85 },
  { label: 'Trello', value: 100 },
  { label: 'Microsoft Office: Excel, Word, PowerPoint', value: 80 },
  { label: 'Google: Docs, Sheets, Slides, ...', value: 80 },
  { label: 'iWork: Numbers, Pages, Keynote.', value: 80 },
  { label: 'Jira, TestRail', value: 45 },
  
];

const dataObject: SkillsData[] = [
  { title: 'Languages', data: Languages, color: 'info' },
  { title: 'General purpose imperative programming', data: Programming, color: 'primary' },
  { title: 'Full Stack development and DBMS', data: Web, color: 'success' },
  { title: 'General computing, CI/CD', data: General, color: 'warning' },
  { title: 'Cloud computing, cloud architecture', data: CloudComputing, color: 'info' },
  { title: 'Computing and science', data: TechnicalComputing, color: 'dark' },
  { title: 'Operative Systems and platforms', data: OS, color: 'danger' },
  { title: 'Software suits', data: OfficeSuits, color: 'primary' },
  { title: 'Workflows, project management', data: Workflows, color: 'info' },
];
export default dataObject;
