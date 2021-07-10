import React,{useEffect,useContext} from "react"
import {Link} from "react-router-dom"
import Loader from "../layout/Loader"
import Repos from "../repos/Repos"
import GithubContext from "../../context/github/githubContext"

const User=({match})=>{
	const githubContext=useContext(GithubContext)
	const {getUser,loading,theUser,repos,getUserRepos}=githubContext
	useEffect(()=>{
		getUser(match.params.userName)
		getUserRepos(match.params.userName)
		// eslint-disable-next-line
	},[])
	const
		{name,avatar_url,location,bio,company,blog,login,html_url,followers,following,public_repos,public_gists,hireable}=theUser
	if(loading) return <Loader/>
	return(
		<>
			<p><Link to="/" className="btn btn-light btn-sm my-1"><i className="fas fa-arrow-alt-circle-left"></i> Back to Search</Link></p>
			Hireable: {hireable?<i className="fas fa-check text-success"/>:<i className="fas fa-times-circle text-danger"/>}
			<div className="card grid-2">
				<div className="all-center">
					<img src={avatar_url} className="round-img" alt="" style={{width:'150px'}}/>
					<h1>{name}</h1>
					<p>Location: {location}</p>
				</div>
				<div>
					{bio&&<><h3>Bio</h3><p>{bio}</p></>}
					<a href={html_url} className="btn btn-dark my-2" target="_blank" rel="noopener noreferrer">Visit Github Profile</a>
					<ul>
						<li>{login&&<><strong>Username:</strong> {login}</>}</li>
						<li>{company&&<><strong>Company:</strong> {company}</>}</li>
						<li>{blog&&<><strong>Website:</strong> <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a></>}</li>
					</ul>
				</div>
			</div>
			<div className="text-center">
				<div className="badge badge-success">Followers: {followers}</div>
				<div className="badge badge-light">Following: {following}</div>
				<div className="badge badge-light">Public Repos: {public_repos}</div>
				<div className="badge badge-light">Public Gits : {public_gists}</div>
			</div>
			<h3>Repos</h3>
			<Repos repos={repos}/>
		</>
	)
}

export default User