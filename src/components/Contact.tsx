import React from "react"
import { useForm, ValidationError } from "@formspree/react"
export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqyzpyn")
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>
  }
  return (
    <div className="contact sm:w-1/3" id="contact">
      <h2 id="contact-header">Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input id="email" type="email" name="email" placeholder="Your email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="Your message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  )
}
