import React from "react";

export default function Contact() {
  return (
    <div className="main contact-page">
      <div className="section section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h2 className="title">Get in touch with us</h2>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualise customer directed
                convergence without revolutionary ROI.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto text-center">
              <h3 className="title">
                <small>Find us on social networks</small>
              </h3>
              <button className="btn btn-just-icon btn-twitter">
                <i className="fa fa-twitter"></i>
              </button>
              <button className="btn btn-just-icon btn-facebook">
                <i className="fa fa-facebook"></i>
              </button>
              <button className="btn btn-just-icon btn-google">
                <i className="fa fa-google"></i>
              </button>
              <button className="btn btn-just-icon btn-dribbble">
                <i className="fa fa-dribbble"></i>
              </button>
              <button className="btn btn-just-icon btn-instagram">
                <i className="fa fa-instagram"></i>
              </button>
              <button className="btn btn-just-icon btn-youtube">
                <i className="fa fa-youtube"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto text-center">
              <h3 className="title">
                <small>Or drop us a note</small>
              </h3>
              <form className="contact">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows={7}
                ></textarea>
                <div className="row">
                  <div className="col-md-6 ml-auto mr-auto">
                    <button className="btn btn-primary btn-block btn-round">
                      Send{" "}
                    </button>
                  </div>
                </div>
              </form>
              <h3 className="visit">
                <small>Or come and visit</small>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
