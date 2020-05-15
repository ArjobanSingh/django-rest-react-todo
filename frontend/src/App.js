import React, {useState, useEffect} from 'react';
import './App.css';

const URL = `http://localhost:8000/api/`

function App() {
  const [data, setData] = useState([]);

  async function getTodos() {
    try{
      const response = await fetch(URL)
      const json = await response.json()
      console.log(json)
      setData(json)
    } catch (e){
      console.log(e)
    }

  }

  useEffect(() => {

    getTodos()
  }, [])

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>
              {item.title}
            </h1>
            <span>
              {item.body}
            </span>
          </div>
        )
      })}
    </div>
  );
}

export default App;
