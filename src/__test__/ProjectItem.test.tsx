import * as React from "react"
import { shallow, mount } from "enzyme"

import { ProjectItem } from "../components/ProjectItem/ProjectItem"

describe("<Header /> testing", () => {
  let wrapper: any
  const data = {
    name: "me",
    git: "@lifeeric",
    live: "empty",
    image: "jpg",
  }
  beforeEach(() => {
    wrapper = shallow(<ProjectItem {...data} />)
  })

  it("should render well", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should give the value", () => {
    console.log(wrapper.find(".project__header").text())
    expect(wrapper.find(".project__header").text()).toBe("me")
  })
})
