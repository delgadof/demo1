import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Features Demo</h1>
        <p>This is a demo application showcasing GitHub features</p>
        <div className="counter">
          <p>Counter: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <div className="features">
          <h2>GitHub Features Demonstrated:</h2>
          <ul>
            <li>GitHub Actions for CI/CD</li>
            <li>Automated Testing</li>
            <li>Code Quality Checks</li>
            <li>Automated Deployment</li>
            <li>Pull Request Workflows</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App; 