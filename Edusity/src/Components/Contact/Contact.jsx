import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';




const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "80eb1694-6528-4435-912d-9ee086b2c257");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Us a massage <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reachout through contact form to find our contact
          information below. Your feedback, Question, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li><img src={mail_icon} alt=""/>edusity@yahoo.com</li>
          <li><img src={phone_icon}/>+1 224-564-4576</li>
          <li><img src={location_icon}/> 77 Massachusetts ave , cambridge<br/>MA 02139, US</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required/>
          <label>Phone Number</label>
          <input type="number" name="phone" placeholder="Enter Your mobile Number" required/>
          <label>Write Your message here</label>
          <textarea name=" masssage" id="" rows="6" placeholder="Enter your massage" required/>
          <button type="submit" className="btn dark-btn">Submit <img src={white_arrow}/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
