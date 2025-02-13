import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
 const [data, setData] = useState([]);
 useEffect(() => {
 axios.get('http://localhost:5000/api/data')
 .then(response => setData(response.data))
 .catch(error => console.error(error));
 }, []);
 return (
 <div>
 <h1>Data from API:</h1>
 <ul>
 {data.map(item => <li key={item.id}>{item.name}</li>)}
 </ul>
 </div>
 );
};
export default App;