import * as React from "react"
import { shallow } from "enzyme"

import { ContactForm } from "../components/Form/Form"

describe("<Form /> Testing", () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = shallow(<ContactForm />)
  })

  it("should return true matching css class name of form", () => {
    expect(wrapper.find('.contact__form')).toHaveLength(1)
  })

  it('should return true matching input elements', () => {
      expect(wrapper.find('.contact__input')).toHaveLength(2)
  })

  it('should render textare', () => {
      console.log(wrapper.find('input').get(0).props.placeholder)
      expect(wrapper.find('.contact__textarea')).toHaveLength(1)
  })
})
