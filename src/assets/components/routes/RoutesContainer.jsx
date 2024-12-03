import Home from "./Home.jsx"
import Projects from "./Projects.jsx"
import { Routes, Route } from "react-router-dom";
function RoutesContainer (){
    return (
        <div className='Route'>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/projects" element = {<Projects/>} />
            </Routes>
        </div>
    )
}

export default RoutesContainer