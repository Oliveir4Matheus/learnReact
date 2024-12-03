import "./LinkTree.css"
import logo from './img/logo.png'
import eletroLogo from "./img/eletro-logo.png"
import smartLogo from "./img/smart-logo.png"
import Button from "./components/Button/Button.jsx"
function LinkTree() {
    return (
        <div className="LinkTree">
            <div className="LogoContainer">
                <img src={logo} className="logo"/>
            </div>
            <h1>Conserta Smart / Eletro</h1>
            <div className="ButtonContainer">
                <Button imgSrc={smartLogo} text="Conserta Smart"/>
                <Button imgSrc={eletroLogo} text="Conserta Eletro"/>
            </div>
        </div>
    )
}
export default LinkTree