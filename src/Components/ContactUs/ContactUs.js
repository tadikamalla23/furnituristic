import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="container-fluid" id="contact">
      <div className="row">
        <div className="col-sm">
          <form action="/action_page.php" className="form1">
          <h2 className='contactus'>Contact Us</h2>
            <div className="row">
              <div className="col">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required /><br />
               

                <label htmlFor="mobile">Mobile</label>
                <input type="text" className="form-control" id="mobile" placeholder="Enter mobile" name="mobile" required /><br />
                <label htmlFor="mobile">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email Id" name="email" required />
              </div>
              <div className="col">
                <textarea className="form-control" rows="10" id="address" name="address" placeholder='Enter Message...'></textarea><br />
                <div className='row'>
              <div className='col-sm'>
                <button type="reset" className="btn btn-primary stretched-link btn-block">Reset</button>
              </div>
              <div className='col-sm'>
                <button type="submit" className="btn btn-primary stretched-link btn-block">Submit</button> 
              </div>
            </div>
              </div><br />
            </div> 
          </form>
        </div>
      </div><br />
    </div>
  );
}

export default ContactUs;