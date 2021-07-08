import React from "react"
import propTypes from "prop-types"
import {Link} from "react-router-dom"

const UserItem=({user:{login,avatar_url,html_url}})=>{
	// const {login,avatar_url,html_url}=props.user
	return(
		<div className="card text-center">
			<img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}/>
			<h3>{login}</h3>
			<div>
				{/* <a href={html_url} className="btn btn-dark btn-sm my-1" target="_blank" rel="noopener noreferrer">See Details</a> */}
				<Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">See Details</Link>
			</div>
		</div>
	)
}

UserItem.propTypes={
	user:propTypes.object.isRequired
}

export default UserItem