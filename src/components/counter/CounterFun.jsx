import React, { useState } from 'react'
import Counter from './Counter'


function CounterFun() {
    var symble;
    const [counter, setCounter] = useState(0)
    const increment = (symble) => {
        if (symble == '++') {
            setCounter(counter + 1)
        } else if (symble == '--') {
            setCounter(counter - 1)
        }else if (symble == '+5') {
            setCounter(counter + 5)
        }else if (symble == '+10') {
            setCounter(counter + 10)
        }else if (symble == '+20') {
            setCounter(counter + 20)
        }
        console.log(symble)
    }



    return (
        <>
            <p>{counter}</p>
            <Counter fun={increment} symble='++' />
            <Counter fun={increment} symble='--' />
            <Counter fun={increment} symble='+5' />
            <Counter fun={increment} symble='+10' />
            <Counter fun={increment} symble='+20' />
        </>
    )
}

export default CounterFun
