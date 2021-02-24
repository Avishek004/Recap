import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const names = ['Avishek', 'Jamil', 'Emon']
  const [names, setNames] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setNames(data))
  }, [])
  return (
    <div className="App">
      <Skill></Skill>
      {/* {
        names.map(name => <li>{name.name}</li>)
      } */}
      {
        names.map(name => <Identity name={name.name} key={name.id} aim={name.username}></Identity>)
      }
      {/* <Identity name={names[0]} aim="Good"></Identity>
      <Identity name="Shishir" aim="Better"></Identity>
      <Identity name={names[2]}></Identity> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Skill() {
  let [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Skill</button>
      <h4>Number of Skills: {count}</h4>
      <AboutSkill Skills={count}></AboutSkill>
    </div>
  )
}

function AboutSkill(props) {
  return (
    <div>
      <h3>Skills I Have: {props.Skills}</h3>
    </div>
  )
}

function Identity(props) {
  const identityStyle = {
    border: "2px solid red",
    margin: "5px",
    padding: "5px"
  }
  return (
    <div style={identityStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Aim: {props.aim || 'Becoming A'} Developer</h3>
    </div>
  )
}

export default App;
