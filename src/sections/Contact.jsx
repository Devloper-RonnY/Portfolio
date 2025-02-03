import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [loading, setLoading] = useState(false)


  const handleChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (e) => {
    // service_jwyc44k
    // template_kelp9u6
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      'service_jwyc44k',
      'template_kelp9u6',
      {
        from_name: form.name,
        to_name: 'Roshan',
        from_email: form.email,
        to_email: "work.roshan45@gmail.com",
        message: form.message,
      },
      'O9pQqlvHEsfXl_nS5'
    )
    .then((response) => console.log('SUCCESS!', response, alert("email send successfuly!", setForm({name: '', email: '', message: ''}))))
    .catch((error) => console.error('FAILED...', error, alert("something went wrong!")))
    .finally(() => setLoading(false))   
}

  return (
    <section className='c-space my-20' id='contact'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src='/assets/terminal.png' alt='terminal-background' className='absolute inset-0 min-h-screen'/>
        <div className='contact-container'>
        <h3 className='head-text'>Let's Talk</h3>
        <p className='text-lg text-white mt-3'>whether you're looking to build a new websites, projects your exisitng plateform, or bring a unique project to life, I'm here to help.</p>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
          <label className='space-y-3 '>
            <span className='field-label'>Full Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} required className='field-input' placeholder= 'Roshan pawar'/>
          </label>
          <label className='space-y-3 '>
            <span className='field-label'>Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} required className='field-input' placeholder= 'work.roshan45@gmail.com'/>
          </label>
          <label className='space-y-3 '>
            <span className='field-label'>Your Message</span>
            <textarea  name='message' value={form.message} onChange={handleChange} required rows={5} className='field-input' placeholder= "Hi i'm interested in..."/>
          </label>
          <button className='field-btn' type='submit' disabled={loading}>
            {loading ? 'sending...' : 'send message'}
            <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
          </button>
        </form>

        </div>
      </div>
    </section>
  )
}

export default Contact;