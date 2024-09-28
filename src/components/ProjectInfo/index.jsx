import React from 'react';
import styles from './styles.module.scss';

export const ProjectInfo = ({ project }) => {
  return (
    <section className={styles.projectInfo}>
      {project.info && (
        <div className={styles.moreInfo}>
          <div className={styles.infoItem}>
            {project.info.year && (
              <div>
                <h4>Year</h4> <p>{project.info.year}</p>
              </div>
            )}
            {project.info.role && (
              <div>
                <h4>Role</h4> <p>{project.info.role}</p>
              </div>
            )}
            {project.info.stack && (
              <div>
                <h4>Stack</h4> <p>{project.info.stack}</p>
              </div>
            )}
            <div>
              <h4>Collaborators</h4>
              <p>
                {project.info.collaborators.map((collaborator, index) => (
                  <React.Fragment key={index}>
                    <a href={collaborator.link} target="_blank" rel="noopener noreferrer">
                      {collaborator.name}
                    </a>
                    {index < project.info.collaborators.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
