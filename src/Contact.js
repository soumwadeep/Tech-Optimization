import React from 'react'

const Contact = () => {

  const formSubmit = (e) => {
    alert("Your Message Has Been Sent!");
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form action="https://formsubmit.co/soumwadeep@gmail.com" method="POST" onSubmit={formSubmit}>
            <div>
              <input type="hidden" name="_subject" value="New Contact Form Submission On Tech Optimization!"/>
              <input type="hidden" name="_template" value="table"/>
              <input type="hidden" name="_captcha" value="false"/>
              <input type="hidden" name="_next" value="https://tech-optimization.vercel.app/"/>
            </div>
            <div className="mb-3">
              <label for="name" className="form-label">Name:</label>
              <input type="text" className="form-control" name="name"/>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email:</label>
              <input type="email" className="form-control" name="email"/>
            </div>
            <div className="mb-3">
              <label for="mobile" className="form-label">Mobile No:</label>
              <input type="tel" className="form-control" name="mobile"/>
            </div>
            <div className="mb-3">
              <label for="message">Comments:</label>
              <textarea className="form-control" name="message"></textarea>
            </div>
            <button type="submit" className="btn_card">Send</button>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact