import dynamic from 'next/dynamic';

import { About } from '../../components/About';
import { Contact } from '../../components/Contact';

import Work from '../../components/Work';
import Experiment from '../../components/Experiment';

const Clock = dynamic(() => import('../../components/Clock'), {
  ssr: false,
});

const Home = ({ projects, experiments }) => {
  return (
    <>
      <Clock />
      <About />
      <Work projects={projects} />
      <Experiment experiments={experiments} />
      <Contact />
    </>
  );
};

export default Home;
