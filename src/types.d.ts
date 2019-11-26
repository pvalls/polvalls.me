import { Component } from 'react';

//Data
interface EntrepreneurData {
  id: string;
  period: string;
  title: string;
  company: string;
  headingIcon: string;
  place: string;
  iconURL: string;
  about: any[];
  // technologies: any[];
  // accomplishments: any[];
  additional_content?: any;
}

interface ExperienceData {
  id: string;
  period: string;
  title: string;
  company: string;
  headingIcon: string;
  place: string;
  iconURL: string;
  about: any[];
  responsabilities?: any[];
  technologies?: any[];
  // accomplishments?: any[];
  additional_content?: any;
}

interface EducationData {
  id: string;
  headingIcon: string;
  period: string;
  place: string;
  iconURL: string;
  university: string;
  GPA: string;
  degree: string;
  specialization: any[];
  courses: any[];
  additional_content?: any;
}

interface SkillsData {
  title: string;
  color: string;
  data: {
    label: string;
    value: number;
  }[];
}

interface HonorsData {
  title: string;
  issues: string;
  description: any;
}

interface CertificationData {
  id: string;
  title: string;
  issues: string;
  description: any;
}

interface TimelineProps {
  itemType: 'experience' | 'education' | 'entrepreneur';
  data: TimelineDataObject[];
}

interface TimelineDataObject {
  id: 'header' | 'item';
  medium?: boolean;
  data: any;
}
