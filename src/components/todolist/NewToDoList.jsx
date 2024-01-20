import React, { useEffect, useState } from 'react'

function NewToDoList() {
    let id = 0
    // const [id,setId] = useState(0)
    const [filter1, setFilter1] = useState()
    const [addData, setAddData] = useState()
    const [arrData, setArrData] = useState()
    const [formData, setFormData] = useState({
        formID: id++,
        name: '',
        age: '',
        mobile: ''
    })

    const handleChange = (e) => {
        setFormData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
    }

    const submitData = () => {
        const items = JSON.parse(localStorage.getItem('localData')) || []
        localStorage.setItem('localData', JSON.stringify([formData, ...items]))
        setAddData(JSON.parse(localStorage.getItem('localData')))
        // localStorage.removeItem('localData')
    }

    const deleteData = (id) => {
        const filterData = arrData.filter(((item, index) => { return (index != id) }))
        localStorage.setItem('localData', JSON.stringify(filterData))
        setFilter1(JSON.parse(localStorage.getItem('localData')))
        console.log(filterData)
    }

    useEffect(() => {
        setArrData(addData)
    }, [addData])

    useEffect(()=>{
        setArrData(filter1)
    },[filter1])

    useEffect(() => {
        const data1 = JSON.parse(localStorage.getItem('localData'))
        setArrData(data1)
    }, [])


    return (

        <>

            <div className='text-center mt-5'>
                <div>
                    <div>
                        <label>Name</label>
                    </div>
                    <input type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <div>
                        <label>age</label>
                    </div>
                    <input type="text"
                        name='age'
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <div>
                        <label>Mobile</label>
                    </div>
                    <input type="text"
                        name='mobile'
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                </div>

                <div className='mt-3'>
                    <button onClick={submitData} className='btn btn-primary'>Add</button>
                </div>
            </div>





            <div className='mt-5'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Moble</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrData?.map(((item, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.mobile}</td>
                                            <td>
                                                <button onClick={() => edit(index)} className='btn btn-primary'>Edit</button>
                                                <button onClick={() => deleteData(index)} className='btn btn-primary ms-2'>Delete</button>
                                            </td>
                                        </tr>

                                    </>
                                )
                            }))
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default NewToDoList