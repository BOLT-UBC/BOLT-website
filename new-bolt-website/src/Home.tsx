import React from 'react';
import Title from './sections/Title';
import About from './sections/About.tsx';
import Events from './sections/Events.tsx';
import Sponsors from './sections/Sponsors.tsx';
import Team from './sections/Team.tsx';

const Home: React.FC = () => {
  return <div>
            <Title />
            <About />
            <Sponsors />
            <Events />
            <Team />
        </div>;
};

export default Home;