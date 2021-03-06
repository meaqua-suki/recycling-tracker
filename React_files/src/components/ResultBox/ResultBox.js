import React from 'react';
import Score from '../Score/Score'
import "./ResultBox.css"

const ResultBox= ({waste, weight, recycling}) => {

	return(
		<div className='result tc pa3 ma2 bw2 shadow-5 results-card'>
		   <h1 className='f2 black'>RESULT</h1>
           <div><Score waste={waste} weight={weight} recycling={recycling} /></div>
		</div>
		);
}

export default ResultBox;
