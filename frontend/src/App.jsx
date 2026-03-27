import { useState } from 'react';
const API_URL = import.meta.env.VITE_API_URL;

console.log(import.meta.env.VITE_API_URL);

function App() {
  const [status, setStatus] = useState(null);

  const checkApi = async () => {
    try {
      const res = await fetch(`/api/health`);
      const data = await res.json();
      setStatus(data.status);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>DevOps Test App - Push the button</h1>
      <button onClick={checkApi}>Check API</button>
      {status && <p>API status: {status}</p>}
    </div>
  );
}

export default App;