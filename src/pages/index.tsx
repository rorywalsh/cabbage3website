import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Testimonials from '@site/src/components/Testimonials';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{height:'100vh'}}>
      <div className="container"> 
      <img src='img/cabbageWithText.svg' alt="Banner Image" className="hero__banner"/>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* Buttons Container */}
        <div className={styles.buttonContainer}>
          <Link className={clsx('button button--secondary', styles.button)} to="/link1">Download <i className="fas fa-download"></i> {/* Font Awesome download icon */}</Link>
          <Link className={clsx('button button--secondary', styles.button)} to="/link2">Forum <i className="fas fa-comments"></i> {/* Font Awesome forum icon */}</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Testimonials />
      </main>
    </Layout>
  );
}
