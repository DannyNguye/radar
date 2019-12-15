import React, { useState } from 'react'
import UserProfileTile from './UserProfileTile'

const UserProfileContainer = props => {
  const [items, setItems] = useState([1])

  const itemsTile = items.map(item => {
    return(
      <UserProfileTile
        key={item}
      />
    )
  })

  return (
    <div>
      <section className="breadcrumb-area text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Profile</h1>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item"><a href="">Home</a></li>
                <li className="list-inline-item"><i className="fa fa-long-arrow-right"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="profile product-grid-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="author-profile text-center">
                    <img src="" alt=""/>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="author-item d-flex flex-row justify-content-between">
                    <div className="item-num">
                      <p>Number of Items</p>
                    </div>
                    <div className="item-count">
                      <p>2</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="author-sale d-flex flex-row justify-content-between">
                    <div className="sale-num">
                      <p>Total Swaps</p>
                    </div>
                    <div className="sale-count">
                      <p>570</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="author-about">
                    {itemsTile}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileContainer
