import React,{useContext} from "react"
import Loader from "../layout/Loader"
import UserItem from "./UserItem"
import GithubContext from "../../context/github/githubContext"

const Users=()=>{
	const githubContext=useContext(GithubContext)
	const {users,loading}=githubContext
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

export default Users