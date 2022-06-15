// Just one example
import Mole from './Mole'
import EmptySlot from './EmptySlot'
import { useEffect, useState } from 'react'

function MoleContainer(props){
    let [hasMole, setDisplayMole] = useState(true)
    function handleClick() {
        setDisplayMole(false);
        props.setScore(props.score + 1);
    }
    return (
        <span>
            {hasMole ? <Mole setDisplayMole={setDisplayMole} handleClick={handleClick}/> : <EmptySlot setDisplayMole={setDisplayMole}/>}
        </span>
    )
}

export default MoleContainer
