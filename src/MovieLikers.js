import React, { Component } from 'react'

class MovieLikers extends Component {
  render() {
    if (this.props.likers.length === 0) {
      return (
        <p>None of the current users liked this movie.</p>
      );
    }
    return(
      <ul className="liker-list">
      	{this.props.likers.map((liker) => (
	        <li>{liker}</li>
      	 ))}      
      </ul>
    ); //return
  } // render
}

export default MovieLikers