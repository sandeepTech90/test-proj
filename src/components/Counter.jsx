import {  useState } from "react"
import { useNavigate } from "react-router-dom";


const Counter = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();


    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => {
            if (prev > 0) {
                return prev - 1
            }
            else return prev
        })
    }


    return <div>
        <div>{count}</div>
        <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={decrement}>DEC</button><button onClick={increment}>INC</button><button onClick={() => setCount(0)}>RESET</button>
        </div>
        <button style={{ marginTop: "50px" }} onClick={() => navigate("/items")}>Go to Items</button>
    </div>
}

export default Counter