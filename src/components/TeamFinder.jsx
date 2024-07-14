import { useState } from 'react';
import Button from './Button';
import Team from './Team';

const TeamFinder = () => {
  const [isTeamLoaded, setIsTeamLoaded] = useState(false);
  const [team, setTeam] = useState('');

  const teams = [
    {
      id: 1,
      name: 'Real Madrid',
    },
    {
      id: 2,
      name: 'Barcelona',
    },
    {
      id: 3,
      name: 'Athletic Club',
    },
    {
      id: 4,
      name: 'Sevilla',
    },
  ];

  const handleRandomTeam = () => {
    const randomIndex = Math.floor(Math.random() * teams.length);
    setTeam(teams[randomIndex].name);
    setIsTeamLoaded(true);
  };

  const handleReset = () => {
    setIsTeamLoaded(false);
    setTeam('');
  };

  return isTeamLoaded ? (
    <>
      <Team
        team={team}
        handleRandomTeam={handleRandomTeam}
        handleReset={handleReset}
      />
    </>
  ) : (
    <section className="max-w-md flex flex-col items-center justify-center gap-4">
      <section className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-lg">El Rincón de Parri</h1>
        <h2>
          Partidas <span className="italic">no tan quemadas</span> para Football
          Manager
        </h2>
      </section>

      <p className="text-center">
        Dando ideas a la gente para crear experiencias tan maravillosas como las
        de una buena partida de FM.
      </p>

      <section className="pt-3 flex flex-col justify-center items-center md:flex-row gap-4">
        <Button name="Aleatorio" onClick={handleRandomTeam} />
        <Button name="A la carta" />
      </section>
    </section>
  );
};

export default TeamFinder;
