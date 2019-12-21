import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import WelcomeTile from "./users/WelcomeTile"

describe("ItemTile", () => {
  let wrapper

  let button = <a href="" data-toggle="modal" data-target="#itemModal">Add Item</a>

  let offer = [{
    id: 1,
    status: "accepted"
  }]

  let item = [{
    id: 1,
    title: "Monopoly",
    description: "A great board game for all",
    location: "Boston, MA",
    category: "board games",
    user: {
      id: 1,
      location: "Amesbury, MA",
      username: "user"
    },
    photo: {
      url: "www.photo.com"
    }
  }]

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <WelcomeTile
          button={button}
          itemsNear={item}
          items={item}
          offers={offer}
        />
      </BrowserRouter>
    )
  })
  it("renders an h5 tag with the number of items", () => {
    expect(wrapper.find("#itemsLength").text()).toBe("1 Total Items")
  })

  it("renders an h5 tag with the number of items near", () => {
    expect(wrapper.find("#itemsNearLength").text()).toBe("1 Items Near You")
  })

  it("renders an h5 tag with the number of offers", () => {
    expect(wrapper.find("#offersLength").text()).toBe("1 Items Swapped")
  })
})
