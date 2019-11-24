import React from 'react';

function Joke(props){
	return (
		<div className="joke">
	
		<p style={{display: props.question ? "block" : "none"}}> question:{props.question}</p>
		<p>punchline:{props.punchLine}</p>

		</div> 
		)
}

export default Joke