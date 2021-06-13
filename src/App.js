import React,{Component} from "react"
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import axios from "axios"
import "./App.css"

class App extends Component{
	// getBirthday=()=>"8th August 1979"
	state={
		users:[],
		loading:false
	}
	async componentDidMount(){
		this.setState({loading:true})
		const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
		this.setState({users:res.data,loading:false})
	}
	render(){
		const
			appName=process.env.REACT_APP_APPNAME
			// myName="Leo Hee Fook Yew",
			// loading=false,
			// showName=true
		document.title=appName
		return(
			<div className="App">
				<Navbar title={appName}/>
				<div className="container">
					<Users loading={this.state.loading} users={this.state.users}/>
				</div>
				{/* {loading?<h4>Loading...</h4>:<p>Hi! Welcome {showName && myName.toUpperCase()}</p>}
				<p>Your birthday is {this.getBirthday()}</p> */}
			</div>
		)
	}
}

export default App