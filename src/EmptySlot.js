import {useEffect} from 'react'
import moleImg from './reactBlack.png'

function EmptySlot(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
            console.log("Returned")
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <span>
            <img style={{'width': '20vw'}}
            src={moleImg}/>
        </span>
    )
}

export default EmptySlot