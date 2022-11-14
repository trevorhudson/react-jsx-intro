function Person({ age, name, hobbies }) {
  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>{age >= 18 ? "please go vote!" : "you must be 18!"}</h3>
      <h1>{name.length >= 8 ? name.substring(0, 8) : name}</h1>
      <ul>
        {hobbies.map((name) => (
          <Hobby name={name} />
        ))}
      </ul>
    </div>
  );
}
