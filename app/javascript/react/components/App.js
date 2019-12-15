import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemsIndexContainer from "./items/ItemsIndexContainer"
import ItemShowContainer from "./items/ItemShowContainer"
import OfferPendingForm from "./offers/OfferPendingForm"
import UserProfileContainer from "./users/UserProfileContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ItemsIndexContainer} />
        <Route exact path="/items" component={ItemsIndexContainer} />
        <Route exact path="/items/:id" component={ItemShowContainer} />
        <Route exact path="/profile/show" component={UserProfileContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
