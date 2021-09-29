import React from "react"
import { shallow } from "enzyme"

// Import Components
import { Navbar } from "../components/Navbar/Navbar"

// Start writing test
describe("First Test", () => {
  it("should render two <NavigationItem /> element if not authenicated", () => {
    const component = shallow(<Navbar />)
    expect(component).toMatchSnapshot()
  })
})
