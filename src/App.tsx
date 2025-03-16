import React from 'react';
import './App.css';

function App() {

  const names = ["Dima", "Sveta", "Katya", "Viktor", "Ignat"];
  const users = [
    {name: "Dima"},
    {name: "Sveta"},
    {name: "Katya"},
    {name: "Viktor"},
    {name: "Ignat"},
  ]

  return (
    <div className="App">
     <div>App</div>
      <ul>
        {names.map((name) => <li>{name}</li>)}
      </ul>
      ---
      <ul>
        {users.map((user, key) => <li key={user.name}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
