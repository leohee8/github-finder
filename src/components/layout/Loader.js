import React from "react"
import Loader from "../../loader.svg"

const Loading=()=>{
	const loaderStyle={
		width:"100px",
		margin:"auto",
		display:"block"
	}
	return(
		<>
			<img src={Loader} alt="Loading" style={loaderStyle}/>
		</>
	)
}

export default Loading