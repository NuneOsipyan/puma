import React from 'react'

const Contact = ({ contact_ref }) => {
  return (
    <div ref={contact_ref} className='for_scroll_con'>
      <h1>Got questions or suggestions?
        Get in touch.
        <br />
        CUSTOMER SERVICE</h1>
       <p>Contact us
        <br /> <br />
        Email: service@puma.com
        <br /> <br />
        Phone: +49 (0)30 22 38 99 33
        <br /> <br />
        Business hours:
        Monday to Friday from 8 am - 8 pm
        <br /> <br />
        CET; Saturday from 8 am - 6 pm CET
        <br />
        By Post:
        PUMA Online Shop
        Postfach 201101
        48092 Münster
        Germany
      </p>
    </div>
  )
}

export default Contact