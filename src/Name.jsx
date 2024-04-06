import { useEffect, useState } from "react";

export function Name(){
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    useEffect(() => {
        console.log('Component Rendered')
        return () => {
            console.log('Component Unmounted')
        }
    })

    useEffect(() => { 
        console.log('Hi')
    }, [])

    useEffect(() => {
        console.log(`My name is ${name} and I am ${age} years old`)
    }, [age, name])

    useEffect(() => {
        document.title = name || ""
        const timeout = setTimeout(() => {
            console.log(`${name} after delay`)
        }, 1000)
        return () => {
            clearTimeout(timeout)
        }
    }, [name])

    function IncrCount(){
        setAge((currentAge) => {
            if(currentAge === 100) return
            return currentAge + 1
        })
    }

    function DecrCount(){
        setAge((currentAge) => {
            if(currentAge === 0) return 0
            return currentAge - 1
        })
    }

    return (
        <div>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <p> My name is {name} and I am {age} years old </p>
            </div>
            

            <div>
                <button onClick={(e) => IncrCount()}> + </button>
                <span> {age} </span>
                <button onClick={(e) => DecrCount()}> - </button>
            </div>

            
        </div>
    )
}