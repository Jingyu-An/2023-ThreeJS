import React, { useMemo, useState } from 'react';
import Clicker from "./Clicker.jsx";
import People from "./People.jsx";

const App = ( { children, clickersCount } ) => {
  const [ hasClicker, setHasClicker ] = useState(true)
  const [ count, setCount ] = useState(0)
  
  const increaseCount = () => {
    setCount(count + 1)
  }
  
  const colors = useMemo(() => {
    const colors = []
    for ( let i = 0; i < clickersCount; i++ )
      colors.push(`hsl(${Math.random() * 360}, 100%, 70%)`)
    
    return colors;
  }, [ clickersCount ])
  
  return (
    <>
      {children}
      
      <div>Total Count: {count}</div>
      
      <button onClick={() => setHasClicker(!hasClicker)}>
        {hasClicker ? 'Hide' : 'Show'} Clicker
      </button>
      {hasClicker && <>
        {[ ...Array(clickersCount) ].map(( _, index ) => (
          <Clicker
            key={index}
            increase={increaseCount}
            keyName={`count${index}`}
            color={colors[index]}
          />
        ))}
      </>}
      
      <People />
    </>
  );
};

export default App;