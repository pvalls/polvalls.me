import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import CertificationsItem from '../components/CertificationsItem';
import CertificationsData from '../data/certifications';

const Certifications = () => (
  <React.Fragment>
    <SectionHeader title="Licenses &amp; Certifications" icon="fa-certificate" />
    {CertificationsData.map(data => (
      <CertificationsItem key={`certification-item-${data.id}`} {...data} />
    ))}
  </React.Fragment>
);

export default Certifications;
