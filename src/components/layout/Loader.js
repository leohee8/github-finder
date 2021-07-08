import React from "react"
import LoaderSVG from "../../loader.svg"

const Loading=()=>{
	const loaderStyle={
		width:"100px",
		margin:"auto",
		display:"block"
	}
	return(
		<>
			<img src={LoaderSVG} alt="Loading" style={loaderStyle}/>
		</>
	)
}

export default Loading