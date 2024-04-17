import React from 'react';
import './ContactUs.css';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are empty
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !mobile || !email) {
        alert('Please fill out all required fields.');
        return;
    }

  

    //success alert
    alert('Your submission was successful!');

    // Clear all fields
    document.getElementById('name').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
};
  return (
    <div className="container-fluid" id="contact">
      <div className="row">
        <div className="col-sm">
          <form action="/action_page.php" className="form1">
          <h2 className='contactus'>Contact Us</h2>
            <div className="row">
              <div className="col">
              <label htmlFor="name">Name<span className="required">*</span></label>
              <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required /><br />

              <label htmlFor="mobile">Mobile Number<span className="required">*</span></label>
              <input type="text" className="form-control" id="mobile" placeholder="Enter mobile number" name="mobile" required /><br />

              <label htmlFor="mobile">Email<span className="required">*</span></label>
              <input type="email" className="form-control" id="email" placeholder="Enter email Id" name="email" required />
              </div>
              <div className="col">
                <textarea className="form-control" rows="10" id="address" name="address" placeholder='Enter Message...' required></textarea><br />
                <div className='row'>
              <div className='col-sm'>
                <button type="reset" className="btn btn-primary stretched-link btn-block">Reset</button>
              </div>
              <div className='col-sm'>
                <button type="submit" className="btn btn-primary stretched-link btn-block" onClick={handleSubmit}>Submit</button> 
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