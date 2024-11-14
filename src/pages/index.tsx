import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description="Welcome to the Documentation Site">
      <main>
        <h1>Welcome to the Docs!</h1>
        <p>Find all our documentation below.</p>
        <a href="/docs/intro.mdx">Start reading the documentation</a>
      </main>
    </Layout>
  );
}

