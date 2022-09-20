import React from 'react';
import data from './pricing.json';
import styles from './PricingPackages.module.scss';
import PricingPackage from './PricingPackage';

const PricingPackages = (props) => {
  return (
    <section className={styles.section}>
      <h1>Select a Package for your Managed Branding Contest</h1>
      <div className={styles.container}>
        <div className={styles.flex}>
          {data.map((data) => (
            <PricingPackage data={data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingPackages;
