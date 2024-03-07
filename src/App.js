import { useState } from 'react';
import './App.css';
import Greet from './components/Greet';
import Profile from './components/Profile'
import MyButton from './components/MyButton';

const isTrue = true
const products = [
  {title : "p1", id: 1},
  {title : "p2", id: 2},
  {title : "p3", id: 3}
]

const listItems = products.map(product => {
  return <li key={product.id}>{product.title}</li>
})



function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count+1)
  }
  return (
    <>
      <h2 style={{color: "red"}}>hello</h2>
      <Greet ></Greet>
      {isTrue && <Profile/>}
      <ul>{listItems}</ul>
      <MyButton count={count} handleClick={handleClick}/>
      <MyButton count={count} handleClick={handleClick}/>
    </>
  );
}

export default App;
