import React, { useEffect, useState } from 'react';

const People = () => {
  const [ people, setPeople ] = useState([])
  
  const getPeople = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    
    setPeople(data)
  }
  
  useEffect(() => {
    getPeople();
  }, [])
  
  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map(( person ) => (
          <li key={person.id}>
            Name: {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;