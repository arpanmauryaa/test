import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected({Component}) {
    const navigate = useNavigate()

    const data = localStorage.getItem("obj");
    console.log(data,'data')

    const fun =()=>{
        if(!data){
            navigate('/')
        }

    }

    useEffect(()=>{
        fun();
    },[])

  return (

    <>
        {<Component/>}
    </>
  )
}

export default Protected
