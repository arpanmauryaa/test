import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import '../../style/PostList.css'



function Postlist() {
    const [listData, setListData] = useState([])
    const navigate= useNavigate()

   const dataFromId=(id)=>{
        navigate(`/component/post/${id}`)
   }

    async function showList() {
        await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                const data = response.data
                setListData(data)
            })
            .catch((error => {
                alert("wrong show Data")
            }))
    }

    useEffect(() => {
        showList();
    }, [])
    console.log(listData, 'list Data')

    return (
        <>
            <table className='customers'>
                <thead>
                    <tr>
                        <th>Company ID</th>
                        <th>Company userID</th>
                        <th>Company Tiitle</th>
                        <th></th>

                    </tr>
                </thead>
    
                    {
                        listData.map(item => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                    <button onClick={()=>dataFromId(item.id)}>Click</button>
                                </tr>
                            )
                        })
                    }
            
            </table>
        </>
    )
}

export default Postlist