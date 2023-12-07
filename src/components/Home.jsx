import { Outlet, useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();

    return <div>
        <button style={{ marginTop: "50px" }} onClick={() => navigate("/items")}>Go to Items</button>
        <button style={{ marginTop: "50px" }} onClick={() => navigate("/counter")}>Go to Counter</button>
        <Outlet />

    </div>
}

export default Home