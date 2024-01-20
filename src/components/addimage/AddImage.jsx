import React, { useState } from 'react'

function AddImage() {

    const [image , setImage] = useState('')

    const handleChange =(e)=>{
        // setImage(e.target.value)
        console.log("event target = ",e.target.files[0])
    }

    async function handleSubmit (event){
        event.preventDefault();

        await axios.post(`https://6538ea94a543859d1bb230b7.mockapi.io/cars`)
        .then((response=>{
            console.log('hii')
        }))
        .catch((error=>{
            console.log('error')
        }))
        console.log('hii')
    }

    // console.log(image,'image')
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type='file' name='image' onChange={handleChange} />
            <input type='submit' />
        </form>
    </>
  )
}

export default AddImage