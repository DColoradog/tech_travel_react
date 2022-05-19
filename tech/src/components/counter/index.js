import React, { useState, useEffect } from "react";

const CounterFunction = () => {
    const [count, setCount] = useState(5);
    const [nombre, setNombre] = useState("Daniel");

    const sumOne = () => { setCount(count + 1); }

    useEffect(() => {
        console.log("hola ");
        const newName = `${nombre}+${count}`
        setNombre(newName);

        return () => {
            console.log("termino");
        }
    }, [count]);
    return (
        <div>
            <h1>{nombre}</h1>
            <p>{count}</p>
            <button onClick={() => sumOne()}>Sumar 1</button>
        </div>

    )
};

export default CounterFunction;