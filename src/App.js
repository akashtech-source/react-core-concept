import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anowar', 'Jafor', 'Alomgir', 'Salman Shah', 'shuvo', 'kallu']
  const products = [
    {name: 'photoshop', price: '$90.99'},
    {name: 'illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier Pro', price: '$259.99'}
    
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)

          }
        </ul>
        {
        products.map(pd =><Product product={pd}></Product>)
        }
        
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="Viewer"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick= { () => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height:'200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name,price);
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>

    </div>
  )
}

function Person(props){
  return (
    <div style={{border: "2px solid red", margin: "10px"}}>
      <h3>May Name: {props.name} </h3>
      <p>My Profession: {props.job} </p>
    </div>
  )
}

export default App;
