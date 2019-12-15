import React from 'react'

const UserProfileTile = props => {

  return(
    <div className="pro-box">
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="pro-image">
            <img src="" className="img-fluid" alt=""/>
            <div className="hover-box text-center">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item"><a href=""><img src="" alt="" className="img-fluid"/></a></li>
                <li className="list-inline-item"><a href=""><img src="" alt="" className="img-fluid"/></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="pro-content">
            <div className="pro-npr d-flex flex-row justify-content-between">
              <div className="box-item-heading">
                <h5><a href="">Title</a></h5>
                  <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">Location: </li>
                  </ul>
                <p>A description</p>
              </div>
              <div className="box-item-price">
                <p>button</p>
              </div>
            </div>
            <div className="box-item-btm d-flex flex-row">
              <div className="box-item-comment">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item"><i className="fa fa-comment-o"></i></li>
                  <li className="list-inline-item">(47)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileTile
