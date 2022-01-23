// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {

    
    return(
        <div>
            <button text='Eyes on me'
            onFocus={() => console.log('Good!')}
            onBlur={() => console.log('Hey! Eyes on me!')}
            >Eyes on me</button>
        </div>
    )
   
}

export default EyesOnMe;