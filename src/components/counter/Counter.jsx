import React from 'react'

function Counter({fun,data,symble}) {

  return (
    <>
        
        <button onClick={()=>fun(name)}>{symble}</button>
    </>
  )
}

export default Counter
