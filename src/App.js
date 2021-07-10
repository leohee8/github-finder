import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Error404 from "./components/pages/404"
import User from "./components/users/User"
import GithubState from "./context/github/githubState"
import AlertState from "./context/alert/alertState"
import "./App.css"

let appName
// if(process.env.NODE_ENV!=="production"){
appName=process.env.REACT_APP_APPNAME
// }else{
// 	appName=process.env.APPNAME
// }

console.log(process.env.APPNAME)

const App=()=>{
	document.title=appName
		return(
			<GithubState>
				<AlertState>
					<Router>
						<div className="App">
							<Navbar title={appName}/>
							<div className="container">
								<Alert/>
								<Switch>
									{/* Main page */}
									<Route exact path="/" component={Home}/>
									{/* About */}
									<Route exact path="/about" component={About}/>
									{/* The user */}
									<Route exact path="/user/:userName" component={User}/>
									{/* Error 404 */}
									<Route component={Error404}/>
								</Switch>
							</div>
						</div>
					</Router>
				</AlertState>
			</GithubState>
		)
}

export default App