import { useRef } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(refForm.current)
    emailjs.sendForm('service_k219z7l',"template_udnq7rj",refForm.current,"-F07bFMvIU4Lzt2LM")
    .then(()=>{
      alert('Message sent successfully!')
      window.location.reload(false)
    },
    ()=>{
      alert('Failed to send the message, please try again')
    })
  }

  return (
    <div className="container contact">
      <Loader type="pacman" />

      <h1>CONTACT ME</h1>
      <p>
        Feel free to reach out to me using the form below. I look forward to
        connecting with you and discussing any inquiries, collaborations, or
        opportunities you may have.
      </p>
      <div className="contact-form">
        <form ref={refForm} onSubmit={sendEmail}>
          <ul>
            <li className="half">
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className="half">
              <input type="email" name="email" placeholder="Email" required />
            </li>
            <li>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Contact
