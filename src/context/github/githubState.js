import React,{useReducer} from "react"
import axios from "axios"
import GithubContext from "./githubContext"
import GithubReducer from "./githubReducer"
import {SEARCH_USERS,SET_LOADING,CLEAR_USERS,GET_USER,GET_REPOS} from "../types"

const githubApi=process.env.REACT_APP_GITHUB_API
const githubClientId=process.env.REACT_APP_GITHUB_CLIENT_ID
const githubClientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET

const GithubState=props=>{
	const initialState={
		users:[],
		theUser:{},
		repos:[],
		loading:false
	}
	const [state,dispatch]=useReducer(GithubReducer,initialState)

	//>> Search Github users
	const searchUsers=async userName=>{
		setLoading()
		const res=await axios.get(`${githubApi}search/users?q=${userName}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
		dispatch({
			type:SEARCH_USERS,
			payload:res.data.items
		})
	}
	//>> Get the Github user
	const getUser=async userName=>{
		setLoading()
		const res=await axios.get(`${githubApi}users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
		dispatch({
			type:GET_USER,
			payload:res.data
		})
	}
	//>> Get users repos
	const getUserRepos=async userName=>{
		setLoading()
		const res=await axios.get(`${githubApi}users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
		dispatch({
			type:GET_REPOS,
			payload:res.data
		})
	}
	//>> Clear users
	const clearUsers=()=>{
		document.querySelector("input[name=user]").value=""
		dispatch({type:CLEAR_USERS})
	}
	//>> Set loading
	const setLoading=()=>dispatch({type:SET_LOADING})

	return(
		<GithubContext.Provider
			value={{
				users:state.users,
				theUser:state.theUser,
				repos:state.repos,
				loading:state.loading,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos
			}}>
			{props.children}
		</GithubContext.Provider>
	)
}

export default GithubState