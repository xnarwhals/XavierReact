import "./index.scss";
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const strArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
    const form = useRef()

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 3000)
    // }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_egjxukt', 'template_cdd282d', form.current, '8JuUJ_0ewy-V6xn0K')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }    

    return (
        <> 
            <div className="container contact-page">
                <div className="text-area">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={strArray} idx={15} />
                    </h1>
                    <p>
                        If you have any questions or want to know more about me, feel free to contact me.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required/>
                                </li>
                                <li className="half">
                                    <input placeholder="Email" type="email" name="email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea> 
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default Contact;