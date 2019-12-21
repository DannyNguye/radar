import React from 'react'

const WelcomeTile = props => {
  return(
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="banner-content">
                    <h1>Welcome!</h1>
                    {props.button}
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="counter-number">
                    <h5 className="welcome-text"><span className="counter">{props.items.length}</span> Total Items</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className="counter-number">
                    <h5 className="welcome-text"><span className="counter">{props.itemsNear.length}</span> Items Near You</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className="counter-number">
                    <h5 className="welcome-text"><span className="counter">{props.offers.length}</span> Items Swapped</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomeTile
