import React,{useState,useContext} from "react"
import GithubContext from "../../context/github/githubContext"
import AlertContext from "../../context/alert/alertContext"

const Search=()=>{
	const githubContext=useContext(GithubContext)
	const alertContext=useContext(AlertContext)
	const [text,setText]=useState("")
	const onChange=e=>{
		setText(e.target.value)
	}
	const onSubmit=(e)=>{
		e.preventDefault()
		if(document.querySelector("input[name=user]").value===""){
			alertContext.setAlert("Hey dog, you got to input something!","light")
		}else{
			githubContext.searchUsers(text)
		}
	}
	return(
		<div>
			<form onSubmit={onSubmit} className="form">
				<input type="text" name="user" placeholder="Search Users..." onChange={onChange}/>
				<input type="submit" value="Search" className="btn btn-dark btn-block"/>
			</form>
			{githubContext.users.length>0&&<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
		</div>
	)
}

export default Search