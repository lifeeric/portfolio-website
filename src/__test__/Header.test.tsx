import * as React from "react"
import { shallow, mount } from "enzyme"

import { Header } from "../components/Header/Header"

describe("<Header /> testing", () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = mount(<Header />)
  })
  it("should render well", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should render again", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
