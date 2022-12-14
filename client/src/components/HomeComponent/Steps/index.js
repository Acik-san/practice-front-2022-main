import React from 'react';
import Step from './Step';
import data from './steps.json';
import styles from './Steps.module.scss';

const Steps = () => {
  const whiteContainerStep = [styles.whiteContainer, styles.stepReverse];
  const greenContainerStep = [
    styles.greenContainer,
    styles.step,
    styles.greenStep,
  ];
  const greyContainerStep = [styles.greyContainer, styles.stepReverse];
  return (
    <>
      <h2>{data[0].h2}</h2>
      <Step data={data[1]} className={whiteContainerStep} key={data[1].id} />
      <Step data={data[2]} className={greenContainerStep} key={data[2].id}/>
      <Step data={data[3]} className={greyContainerStep} key={data[3].id}/>
    </>
  );
};

export default Steps;
