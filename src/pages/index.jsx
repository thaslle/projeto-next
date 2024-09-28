import { loadData } from '../api/';

import PageTransition from '../components/PageTransition';
import Home from '../templates/Home';

export default function Index({ projects = [], experiments = [] }) {
  // Handle when there are no projects
  if (!projects?.length) {
    return <p>No projects available at the moment.</p>;
  }

  if (!experiments?.length) {
    return <p>No experiments available at the moment.</p>;
  }

  return (
    <PageTransition>
      <Home projects={projects} experiments={experiments} />
    </PageTransition>
  );
}

export const getStaticProps = async () => {
  let projects = [];
  let experiments = [];

  try {
    projects = await loadData('projects'); // Fetch the projects data
  } catch (error) {
    console.error('Error fetching projects:', error); // Log errors for debugging
  }

  try {
    experiments = await loadData('experiments'); // Fetch the experiments data
  } catch (error) {
    console.error('Error fetching experiments:', error); // Log errors for debugging
  }

  return {
    props: {
      projects,
      experiments,
    },
  };
};
