import Button from './Button';

const Team = ({ team, handleRandomTeam, handleReset }) => {
  console.log(team);
  return (
    <section className="max-w-md flex flex-col items-center justify-center gap-4">
      <article className="flex flex-col items-center justify-center gap-4">
        <img src="defaultbadge.svg" alt="Logo" width={64} height={64} />
        <h3 className="font-bold">{team}</h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquam massa quis eros porttitor iaculis. Quisque ut malesuada mi,
          nec facilisis dolor. Curabitur auctor vulputate varius. Integer
          convallis neque dapibus quam facilisis, ut vestibulum nulla
          sollicitudin. Nullam vel orci ut felis vehicula suscipit.
        </p>
      </article>

      <section className="pt-3 flex flex-col md:flex-row gap-4">
        <Button name="Nuevo Equipo" onClick={handleRandomTeam} />
        <Button name="Ir a Inicio" onClick={handleReset} />
      </section>
    </section>
  );
};

export default Team;
