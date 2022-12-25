import React from "react";
// import "fonts/icomoon/style.css"
import "./Contact.css";
import HomeIcon from "@mui/icons-material/Home";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export const Contact = () => {
  return (
    <section className="contact-page-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <HomeIcon sx={{ color: "warning" }} />
                </div>
                <div className="contact-info-text">
                  <h2>address</h2>
                  <span>Ghatkesar Mandal, Medchal District- 500088.</span>
                  <span>Hyderabad,Telangana, India.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <AttachEmailIcon />
                </div>
                <div className="contact-info-text">
                  <h2>E-mail</h2>
                  <span> info@nmrec.edu.in</span>
                  <span>Notoriousdemons2022@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <QueryBuilderIcon />
                </div>
                <div className="contact-info-text">
                  <h2>office time</h2>
                  <span>Mon - Fri 9:00 am - 4.00 pm</span>
                  <span>Sat:&emsp;9:00am -12:30pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="contact-page-form" method="post">
              <h2>Get in Touch with Notorious-Demons</h2>
              <form action="https://formspree.io/f/xqkozwgd" method="post">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Name" name="name" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Subject" name="subject" />
                    </div>
                  </div>
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <textarea
                        placeholder="Write Your Message"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="single-input-fieldsbtn">
                    <input type="submit" value="Send Now" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-page-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1292819531673!2d78.61930281470345!3d17.40558228806768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9e5b3f88e319%3A0x3f17e6e247d89765!2sNalla%20Malla%20Reddy%20Engineering%20College!5e0!3m2!1sen!2sin!4v1671973244385!5m2!1sen!2sin"
              width="1300"
              height="450"
              style={{ border: "0" }}
              // allowFullScreen="true"
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
           
          </div>
        </div>
      </div>
    </section>
  );
};
