import './Button.css'
function Button ({imgSrc,text}) {
    return (
        <div className="Button">
            <div className='imgBtnContainer'>
                <img src={imgSrc} className="imgBtn"/>
            </div>
            <div className='textBtnContainer'>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default Button