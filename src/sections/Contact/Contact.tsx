import * as React from "react"
import Row from "../../components/Column/Row/Row"
import Column from "../../components/Column/Column"
import IconContact from "../../assets/getin2.inline.svg"
import { ContactForm } from "../../components/Form/Form"

import "./Contact.scss"

export const Contact: React.FC = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact__name">Say Hello to me</h1>
      <div className="contact__wrapper">
        <Row reverse="no">
          <Column>
            <div className="contact__image">
              <IconContact />
            </div>
          </Column>
          <Column>
            <ContactForm />
          </Column>
        </Row>
      </div>
    </div>
  )
}
