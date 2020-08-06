import React from 'react';
import Hero from '../../components/homepage/Hero/Hero';
import EverybodyWins from '../../components/homepage/EverybodyWins/EverybodyWins';
import ChildsPlay from '../../components/homepage/ChildsPlay/ChildsPlay';
import TheSolution from '../../components/homepage/TheSolution/TheSolution';
import Benefits from '../../components/homepage/Benefits/Benefits';
import ReallyFree from '../../components/homepage/ReallyFree/ReallyFree';
import ShopsAnimation from '../../components/homepage/ShopsAnimation/ShopsAnimation';
import './Home.scss';

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <EverybodyWins />
      <ChildsPlay />
      <TheSolution />
      <Benefits />
      <ReallyFree />
      <ShopsAnimation />
    </main>
  );
}

export default Home;