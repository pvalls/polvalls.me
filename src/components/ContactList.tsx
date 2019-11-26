import * as React from 'react';

const ContactList = ({ data }: any[]) => (
  <React.Fragment>
    {data.map(el => (
      <div key={`contact-${el.icon}`}>
        <span>
          <i style={{ paddingRight: '1rem' }} className={el.icon} />
          <a href={el.link}>{el.field}</a>
        </span>
      </div>
    ))}
  </React.Fragment>
);

export default ContactList;
