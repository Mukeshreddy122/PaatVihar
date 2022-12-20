import React, { Fragment } from "react";
export const Contact = () => {
  return (
    <Fragment>
      <section className="contact">
        <div className="contact-heading">
          <h2>Contact Us</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="icon">
                    {/* <i className='fa-solid fa-loca' */}
                  </div>
                  <div className="text">
                    <h5>Address</h5>
                    <p>
                      Divyanagar, Kachivanisingaram Near Narapally Ghatkesar
                      Mandal, Medchal District- 500088. Hyderabad,Telangana,
                      India.
                    </p>
                  </div>
                </div>
                <div className="contact-widget-item">
                  <div className="icon">
                    {/* <i className='fa-solid fa-loca' */}
                  </div>
                  <div className="text">
                    <h5>Address</h5>
                    <p>
                      Divyanagar, Kachivanisingaram Near Narapally Ghatkesar
                      Mandal, Medchal District- 500088. Hyderabad,Telangana,
                      India.
                    </p>
                  </div>
                </div>
                <div className="contact-widget-item">
                  <div className="icon">
                    {/* <i className='fa-solid fa-loca' */}
                  </div>
                  <div className="text">
                    <h5>Address</h5>
                    <p>
                      Divyanagar, Kachivanisingaram Near Narapally Ghatkesar
                      Mandal, Medchal District- 500088. Hyderabad,Telangana,
                      India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* another section */}
            <div className="column">
                <div className="contact-form">
                    <form action="#">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <textarea type="text" placeholder="Comment"/>
                    </form>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="map-column">
                <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1292819531673!2d78.61930281470345!3d17.40558228806768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9e5b3f88e319%3A0x3f17e6e247d89765!2sNalla%20Malla%20Reddy%20Engineering%20College!5e0!3m2!1sen!2sin!4v1671546422205!5m2!1sen!2sin"
                 width="600"
                  height="450"
                   style={{border:0}}
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                </div>
            </div>

          </div>
        </div>
      </section>
    </Fragment>
  );
};
