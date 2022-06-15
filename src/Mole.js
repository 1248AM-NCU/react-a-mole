import {useEffect} from 'react'
import moleImg from './logo512.png'

function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
            console.log("Appeared")
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <span>
            <img style={{'width': '20vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </span>
    )
}

export default Mole
