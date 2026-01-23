import Banner from '@/src/components/Banner'
import ContactUsForm from '@/src/components/ContactUs/ContactUsForm'
import React from 'react'

const ContactPage = () => {
  return (
    <>
    <Banner title='Lets Build Together' video="./videos/About Banner.mp4"/>
    <ContactUsForm/>
    </>
  )
}

export default ContactPage