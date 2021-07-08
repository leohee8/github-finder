import React,{useState} from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import axios from "axios"
import Navbar from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import Users from "./components/users/Users"
import User from "./components/users/User"
import Search from "./components/users/Search"
import GithubState from "./context/github/githubState"
import "./App.css"

const App=()=>{
	const
		[repos,setRepos]=useState([]),
		[loading,setLoading]=useState(false),
		[alert,setAlert]=useState(null)
	//>> Get users repos
	const getUserRepos=async userName=>{
		setLoading(true)
		const res=await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
		setRepos(res.data)
		setLoading(false)
	}
	const showAlert=(msg,type)=>{
		setAlert({msg,type})
		setTimeout(()=>setAlert(null),3000)
	}
	const appName=process.env.REACT_APP_APPNAME
	document.title=appName
		return(
			<GithubState>
				<Router>
				<div className="App">
					<Navbar title={appName}/>
					<div className="container">
						<Alert alert={alert}/>
						<Switch>
							<Route exact path="/" render={props=>(
								<>
									<Search showAlert={showAlert}/>
									<Users/>
								</>
							)}></Route>
							<Route exact path="/about" component={About}/>
							<Route exact path="/user/:userName" render={props=>(
								<User
									{...props}
									getUserRepos={getUserRepos}
									repos={repos}
								/>
							)}/>
						</Switch>
					</div>
				</div>
				</Router>
			</GithubState>
		)
}

export default App