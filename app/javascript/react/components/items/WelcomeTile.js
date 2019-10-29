import React from 'react'

const WelcomeTile = props => {
  return(
    <div className="jumbotron text-center">
      <h1 className="display-4">Hello, world!</h1>
      <hr className="my-4"/>
      <button type="button" className="btn btn-primary sign-up-btn">Sign Up</button>
    </div>
  )
}

export default WelcomeTile
