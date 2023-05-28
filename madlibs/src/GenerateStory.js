import React from 'react';
const GenerateStory = ({resetStory, noun, noun2, adjective, color}) => {
    const reset = () =>{
        resetStory();
    }
    return (
        <div>
           
            <p>There was a {color} {noun} who loved a {adjective} {noun2}.</p>
            <button onClick={reset}>Restart</button>
        </div>
    )
}
export default GenerateStory;