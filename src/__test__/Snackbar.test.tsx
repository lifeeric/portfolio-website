import * as React from "react"

import { shallow } from "enzyme"

import { Snackbar } from "../components/Snackbar/Snackbar"

describe("<Snackbar />", () => {
  it("should render", () => {
    const wrapper = shallow(<Snackbar />)
    expect(wrapper).toMatchSnapshot()
  })
})
