import React,{Component,Fragment} from "react"
import "./App.css"

class App extends Component{
	getBirthday=()=>"8th August 1979"
	render(){
		const
			myName="Leo Hee Fook Yew",
			loading=false,
			showName=true

		return(
			<Fragment>
				<h1>Github Finder Project</h1>
				{loading?<h4>Loading...</h4>:<p>Hi! Welcome {showName && myName.toUpperCase()}</p>}
				<p>Your birthday is {this.getBirthday()}</p>
			</Fragment>
		)
	}
}

export default App