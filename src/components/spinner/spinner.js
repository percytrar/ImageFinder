import React from 'react'
import spinner from './bolt.gif'
const Spinner = ()=> {
    return (
        <div>
            <img src={spinner}
            alt="LOADING..."
            style={{width:"500px", margin: "40px auto", display:'block'}}/>
        </div>
    )
}
export default Spinner;