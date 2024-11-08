import { useState } from 'react';
import { hello_backend } from 'declarations/hello_backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [allNames, setAllNames] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    hello_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  function showAllName (){
    hello_backend.submittedNames().then((names) => {
      console.log(names);
      setAllNames(names);
    })
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>

      {allNames && allNames.map((item, key) => {
        return <>
          <p key={key}>{item}</p>
        </>
      })}

      <button onClick={showAllName}>Show all names</button>

    </main>
  );
}

export default App;
