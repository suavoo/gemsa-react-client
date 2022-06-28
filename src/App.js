import './App.css';
import { AuthProvider } from './context/auth';
import Nav from './components/Nav';
import CallList from './components/CallList';
import { useEffect, useState } from 'react';
import { server } from './config';

function App() {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    const fetchCalls = async () => {
      const res = await fetch(`${server}/api/calls`)
      setCalls(await res.json())
    }

    fetchCalls()
      .catch(console.error)
  }, []);

  console.log(calls)

  return (
    <AuthProvider>
      <div className="App">
        <Nav/>
        <CallList calls={calls} />
      </div>
    </AuthProvider>
  );
}

export default App;
