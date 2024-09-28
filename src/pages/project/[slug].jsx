import { useRouter } from 'next/router';
import { loadData } from '../../api/';
import { ProjectView } from '../../templates/ProjectView/';
import PageTransition from '../../components/PageTransition';

export default function Page({ data = [] }) {
  const router = useRouter();
  const project = data.find((page) => page.slug === router.query.slug);
  const projects = data.filter((page) => page.slug !== router.query.slug);

  if (!project) {
    return <div className="loading-placeholder" />;
  }

  return (
    <PageTransition>
      <ProjectView project={project} projects={projects} />;
    </PageTransition>
  );
}

export const getStaticPaths = async () => {
  const paths = (await loadData('projects')).map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };

  // return {
  //   paths: [],
  //   fallback: true,
  // };
};

export const getStaticProps = async () => {
  let data = [];

  try {
    data = await loadData('projects'); // Fetch the projects data
  } catch (error) {
    console.error('Error fetching projects:', error); // Log errors for debugging
  }

  return {
    props: {
      data,
    },
  };
};
