import React, { useState, useEffect } from 'react';

function App() {
  const [ randomNumber, setRandom ] = useState(1);
  // const [ newNumber, setNew ] = useState(0);

  // useEffect(() => {
  //   setInterval(  
  //     setRandom(Math.floor(Math.random() * (100 -1)) + 1),
  //     2000
  //   )
  // }, [])
  
  // const changeNumber = () => {
  //   setNew(newNumber + 1)
  // }

  const newTry = () => {
    setInterval(  
      setRandom(Math.floor(Math.random() * (100 -1)) + 1),
      2000
    );
  }

  return (
    <div>
      <button onClick={newTry}>oi</button>
      {/* <p>{setInterval(changeNumber, 2000)}</p> */}
      <p>{ randomNumber }</p>
      {/* <p>{ newNumber }</p> */}
    </div>
  );
}

export default App;
