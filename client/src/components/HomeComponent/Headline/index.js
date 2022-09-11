import React from 'react';
import data from './Headline.json';

const Headline = (props) => {
  const { classNames } = props;
  return data.map(({ head, text }) => (
    <div className={classNames[0]}>
      <h3>{head}</h3>
      <p className={classNames[1]}>{text}</p>
    </div>
  ));
};

export default Headline;
