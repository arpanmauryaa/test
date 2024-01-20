import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FilterData() {
    const [filterData, setFilterData] = useState([])
    const [arrData, setArrData] = useState([])
    const [nameData, setNameData] = useState({
        name: '',
    })

    const handleChange = (e) => {
        setNameData({ [e.target.name]: e.target.value })
    }

    async function getData() {
        await axios.get(`https://6538ea94a543859d1bb230b7.mockapi.io/cars`)
            .then((response => {
                const data = response.data;
                data.sort((a, b) => a.name.localeCompare(b.name));
                console.log(data, 'data')
                setArrData(data)
                setFilterData(data)

            }))
            .catch((error => {
                alert('error')
            }))
    }

    useEffect(() => {
        getData();
    }, [])
    console.log(arrData, 'filterData')

    async function handleSubmit(event) {
        event.preventDefault();
        await axios.post(`https://6538ea94a543859d1bb230b7.mockapi.io/cars`, nameData)
            .then((response => {
                console.log(response)
            }))
            .catch((error => {
                console.log('error')
            }))
    }

    const handleFiilter = (e) => {
        const data = arrData.filter((item) => item.name.includes(e.target.value))
        setFilterData(data)
        console.log(data, 'datafilter')
        console.log('hi')
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' value={nameData.name} onChange={handleChange} />
                    <input type='submit' />
                </form>

                <input className='mt-3 form-control' type='text' onChange={handleFiilter} placeholder='fiilterData' />
            </div>


            <div>
                <table className="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterData?.map(((item) => {
                                return (
                                    <>
                                        <tr key='item'>
                                            <td>{item.name}</td>
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

export default FilterData