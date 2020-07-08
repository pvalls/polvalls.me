import * as React from 'react';
import ExperienceItem from './ExperienceItem';
import ExperienceItemNoTech from './ExperienceNotTechItem';
import EntrepreneurItem from './EntrepreneurItem';
import EducationItem from './EducationItem';

export default ({ type, ...rest }: any) => {
  const props: any = rest;
  const Item = type => {
    switch (type) {
      case 'entrepreneur':
        return <EntrepreneurItem {...props} />;
      case 'experience':
        return <ExperienceItem {...props} />;
      case 'experiencenotech':
          return <ExperienceItemNoTech {...props} />;
      case 'education':
        return <EducationItem {...props} />;
    }
  };

  return <React.Fragment>{Item(type)}</React.Fragment>;
};
