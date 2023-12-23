import { useState } from 'react';
import reactLogo from './assets/react.svg';
 // Assuming 'vite.svg' is in the same directory
import axios from 'axios';
import './App.css';

function App() {
  const [apiData, setApiData] = useState('');
  const [check, setCheck] = useState(true);

  const handleApi = async () => {
    try {
      const url = 'http://localhost:3000/api/hello';
      const res = await axios.get(url);
      setCheck((prev) => !prev);
      setApiData(res.data.message);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  return (
    <>
      <div>
        <a href="/">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React On Docker</h1>
      <div className="card">
        <button onClick={handleApi}>
          {check ? 'Click' : apiData}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
