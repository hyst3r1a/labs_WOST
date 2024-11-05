import logo from './logo.svg';
import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React 128
        </a>
        <YourComponent/>
      </header>
    </div>
  );
}

const postUserData = async () => {
  try {
      const response = await axios.post(
          'http://localhost:3001/users',
          {
              firstName: 'Jane',
              lastName: 'Smith',
              email: 'jane@gmail.com',
          },
          {
              headers: {
                  'Content-Type': 'application/json',
              },
          }
      );
      console.log('Response:', response.data);
  } catch (error) {
      console.error('Error posting data:', error);
  }
};

const YourComponent = () => {
  return (
      <div>
          <button onClick={postUserData}>Send User Data</button>
      </div>
  );
};


export default App;
