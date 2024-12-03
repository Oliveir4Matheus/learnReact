import './App.css'
import Nav from "./assets/components/nav/Nav.jsx"
import RoutesContainer from "./assets/components/routes/RoutesContainer.jsx"
import { BrowserRouter} from "react-router-dom"
function App() {
    return (
        <>
        <BrowserRouter>
            <div className="App">
                <Nav/>
                <RoutesContainer/>
            </div>
        </BrowserRouter>
        </>
    )
}

export default App
