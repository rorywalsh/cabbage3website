import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    // Redirect to the documentation homepage
    history.push('/cabbage3docs/docs/intro'); // Change this to your desired docs page
  }, [history]);

  return (
    <Layout title="Redirecting..." description="Redirecting to documentation...">
      <div>Redirecting to documentation...</div>
    </Layout>
  );
}

