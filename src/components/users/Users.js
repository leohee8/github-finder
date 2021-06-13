import React from "react"
import UserItem from "./UserItem"
import Loader from "../layout/Loader"
import propTypes from "prop-types"

const Users=({users,loading})=>{
	const userStyle={
		display:"grid",
		gridTemplateColumns:"repeat(5,1fr)",
		gap:"1em"
	}
	return(
		<>
		{loading&&<Loader/>}
		<div style={userStyle}>
			{users.map(user=>(<UserItem key={user.id} user={user}/>))}
		</div>
		</>
	)
}

Users.propTypes={
	users:propTypes.array.isRequired,
	loading:propTypes.bool.isRequired
}

export default Users