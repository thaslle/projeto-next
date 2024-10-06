import dynamic from 'next/dynamic';

import { Contact } from '../../components/Contact';
import { ProjectAbout } from '../../components/ProjectAbout';
import { ProjectInfo } from '../../components/ProjectInfo';
import { ProjectHero } from '../../components/ProjectHero';
import { ProjectLines } from '../../components/ProjectLines';
import { ProjectOthers } from '../../components/ProjectOthers';

const Clock = dynamic(() => import('../../components/Clock'), {
  ssr: false,
});

import styles from './styles.module.scss';

export const ProjectView = ({ project, projects }) => {
  return (
    <>
      <Clock />
      <section className={styles.projectView}>
        <ProjectHero project={project} />
        <div className={`${styles.list} section`}>
          <ProjectAbout project={project} />
          <ProjectInfo project={project} />
          <ProjectLines project={project} />
        </div>
        <ProjectOthers projects={projects} />
      </section>
      <Contact />
    </>
  );
};
