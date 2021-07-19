import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';

export default function App() {

  const [data, getData] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_delay=2000')
      .then(response => response.json())
      .then(result => getData(result))
  }, []);

  return (
    <div className="App">
      {data ? 
        <ul>{data.map((item, i) => <li key={i}>{item.id}: {item.name}</li>)}</ul> : 
        <div className="spinner-container">
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      }
    </div>
  );
}