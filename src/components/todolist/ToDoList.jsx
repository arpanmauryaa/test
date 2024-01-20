import React, { useState } from 'react'

function ToDoList() {

    const [id, setId] = useState(0)
    const [arrData, setArrData] = useState([])
    const [formData, setFormData] = useState({
        formID: id,
        name: '',
        age: '',
        mobile: ''
    })

    const handleChange = (e) => {
        setFormData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
    }

    const submit = () => {
        setId(id + 1)
        setArrData((oldData) => [...oldData, formData]);
        console.log(arrData)
        console.log(id, 'id')
        formData('')
    }


    const edit = (i) => {
        console.log(i, 'edite i')
    }


    const deleteData = (id) => {
        const updatedArr = arrData.filter((item, index) => index !== id);
        setArrData(updatedArr);
    }


    return (
        <>
            <div>
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
                        <button onClick={submit} className='btn btn-primary'>Add</button>
                    </div>
                </div>
            </div>




            <div>
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
                                arrData.map(((item, index) => {
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
            </div>


        </>
    )
}

export default ToDoList
