import React, { useState, useEffect } from 'react'
import WelcomeTile from './WelcomeTile'

const WelcomeContainer = props => {
  const [signedIn, setSignedIn] = useState(true)
  const [items, setItems] = useState([])
  const [itemsNear, setItemsNear] = useState([])
  const [offers, setOffers] = useState([])

  let button

  useEffect(() => {
    fetch(`/api/v1/users`)
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.user) {
        setSignedIn(body.logged_in)
      } else {
        setSignedIn(body.user)
      }
      setItemsNear(body.items_near)
      setItems(body.items)
      setOffers(body.offers)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  if (signedIn) {
    button = <a href="" data-toggle="modal" data-target="#itemModal">Add Item</a>
  } else {
    button = <a href="/users/sign_up">Sign Up</a>
  }

  return(
    <section className="banner text-center">
      <WelcomeTile
        button={button}
        itemsNear={itemsNear}
        items={items}
        offers={offers}
      />
    </section>
  )
}

export default WelcomeContainer
