import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', {post})
    .then (response => console.log(response))
    .catch(err => console.log(err));
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        Title: <input type="text" onChange={handleInput} name="title"></input><br /><br />
        Post: <input type="text" onChange={handleInput} name="body"></input><br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
