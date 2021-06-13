import React from "react"
import propTypes from 'prop-types'

const Navbar=({icon,title})=>{
	return(
		<nav className="navbar bg-primary">
			<h1><i className={icon}/> {title}</h1>
		</nav>
	)
}

//>> Set the default props value
Navbar.defaultProps={
	title: "Menu",
	icon: "fab fa-github"
}
//>> Set the type of props value
Navbar.propTypes={
	title:propTypes.string.isRequired,
	icon:propTypes.string.isRequired
}

export default Navbar