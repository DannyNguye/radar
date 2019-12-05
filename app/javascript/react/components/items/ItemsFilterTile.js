import React from 'react'

const ItemsFilterTile = props => {
  return (
    <div className="col-md-12">
        <ul className="gallery-filter list-unstyled list-inline text-center">
            <li className={`list-inline-item ${props.active.newActive}`} id="newest" onClick={props.newClick}>
              Newest
            </li>
            <li className={`list-inline-item ${props.active.boardActive}`} id="board games" onClick={props.boardClick}>
              Board Games
            </li>
            <li className={`list-inline-item ${props.active.collectActive}`} id="collectibles" onClick={props.collectClick}>
              Collectibles
            </li>
            <li className={`list-inline-item ${props.active.videoActive}`} id="video games" onClick={props.videoClick}>
              Video Games
            </li>
        </ul>
    </div>
  )
}

export default ItemsFilterTile
