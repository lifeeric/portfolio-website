import * as React from "react"
import { useState, useRef } from "react"
import { FiSend } from "react-icons/fi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { Snackbar } from "../Snackbar/Snackbar"
import emailjs from "emailjs-com"

import "./Form.scss"

interface Data {
  from_name: any
  from_email: any
  message_body: any
}

export const ContactForm: React.FC = () => {
  const [empty, setEmpty] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const message = useRef<HTMLTextAreaElement>(null)
  const [sent, setSent] = useState<boolean>(false)

  // Form Submitting
  const formSubmitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault()

    let name_value = name.current?.value
    let email_value = email.current!.value
    let message_value = message.current!.value
    // validate
    if (!name_value || !email_value || !message_value) {
      setEmpty(true)
      return
    }

    setEmpty(false)

    // start process of sending
    setSent(true)

    // form data to be submitted
    const formData: Data = {
      from_name: name_value,
      from_email: email_value,
      message_body: message_value,
    }

    sendingEmaliTo(
      process.env.GATSBY_TEMP_ID1,
      process.env.GATSBY_USER_ID1,
      formData
    ).then(res => {
      // show success message, and show proccessing icon, clear form data
      resetInputs()
      setSent(false)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 5000)

      // second api hitting
      // if (res.text === "The quota is reached" || res.status === 426) {
      //   sendingEmaliTo(
      //     process.env.GATSBY_TEMP_ID2,
      //     process.env.GATSBY_USER_ID2,
      //     formData
      //   )
      // }
      return res
    })
  }

  // sending email
  const sendingEmaliTo = async (template: any, userId: any, data: Data) => {
    return await emailjs.send("service_bi76gon", template, data, userId).then(
      function (response) {
        // console.log("SUCCESS!", response.status, response.text)
        return response
      },
      function (error) {
        // console.log("FAILED...", error)
        return error
      }
    )
  }

  // resetting form value to empty
  const resetInputs = (): void => {
    name.current!.value = ""
    email.current!.value = ""
    message.current!.value = ""
  }

  // closing snackbar
  const closeSnackbarHandler = (): void => {
    setSuccess(false)
  }

  return (
    <>
      <div className="contact__form">
        <p className="contact__customMail">
          <strong>E-mail</strong>: hi@
          <span className="contact__domain">ericgit.me</span>
        </p>
        <hr className="contact__line" />
        <br />
        <form action="" method="">
          <div className="contact__input contact__name">
            <input ref={name} type="text" placeholder="Full Name." />
          </div>
          <div className="contact__input contact__email">
            <input ref={email} type="text" placeholder="Email" />
          </div>
          <div className="contact__body">
            <textarea
              ref={message}
              className="contact__textarea"
              placeholder="Hey eric, What you have been up to lately :)"
            ></textarea>
          </div>
          <div className="contact__action">
            <button
              type="submit"
              onClick={formSubmitHandler}
              className="contact__submit"
            >
              Send{" "}
              {sent ? (
                <span className="contact__process">
                  <BsThreeDotsVertical />{" "}
                </span>
              ) : (
                <FiSend />
              )}
            </button>

            {empty && (
              <div className="contact__info">All fields are required!</div>
            )}
          </div>
        </form>
      </div>

      {/** Snackbar */}
      <Snackbar
        isOpen={success}
        onClick={closeSnackbarHandler}
        message="I received your message!"
      />
    </>
  )
}
