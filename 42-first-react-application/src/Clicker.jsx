import React, { useRef, useEffect, useState } from 'react';

const Clicker = ( { keyName, color, increase } ) => {
  const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) || 0))
  const buttonRef = useRef(null)
  
  useEffect(() => {
    buttonRef.current.style.color = 'papayawhip'
    buttonRef.current.style.backgroundColor = 'salmon'
    return () => {
      localStorage.removeItem(keyName)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem(keyName, count)
  }, [ count ])
  
  const handleClick = () => {
    setCount(count + 1)
    increase()
  }
  
  return (
    <>
      <div style={{ color }}>Clicks Count: {count}</div>
      <button ref={buttonRef} onClick={handleClick}>Click me</button>
    </>
  );
};

export default Clicker;