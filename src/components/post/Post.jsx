import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


function Post() {
    const [bodyData, setBodyData] = useState([])
    const param = useParams();
    console.log(param)

    async function dataFromId() {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${param.postId}`)
            .then((response) => {
                const data = response.data
                setBodyData([data])
                console.log(data)
            })
            .catch((error => {
                alert("wrong show Data")
            }))
    }

    useEffect(() => {
        dataFromId();
    }, [])
    console.log(bodyData, 'bodyData')

    return (
        <>
            {
                bodyData.map((item=>{
                    return(
                        <p>title :- {item.id} :- {item.body}</p>
                    )
                }))
            }
        </>
    )
}

export default Post