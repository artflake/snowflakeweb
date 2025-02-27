import React from "react";
import { SITE_NAME } from "../../utils/constants";
import "./About.css";

export default function About() {
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{backgroundImage: "url(../assets/img/sections/gerrit-vermeulen.jpg)"}}
      >
        <div className="filter filter-danger"></div>
        <div className="content-center">
          <div className="container">
            <h1>
              Hello, <br /> We are {SITE_NAME}.
            </h1>
            <h3>Let us tell you more about what we do.</h3>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="section">
          <div className="container">
            <h3 className="title-uppercase">We build great products.</h3>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.{" "}
            </p>
            <h3 className="title-uppercase">
              We <i className="fa fa-heart heart"></i>&nbsp; what we do.
            </h3>
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
            </p>
            <h2 className="text-center creators">Creators</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-profile card-plain">
                  <div className="card-body">
                    <div className="card-avatar">
                      <a href="#avatar">
                        <img
                          src="../assets/img/faces/ayo-ogunseinde-2.jpg"
                          alt="..."
                        />
                        <h4 className="card-title">Eric Thomson</h4>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes orchestra
                      to play it.
                    </p>
                  </div>
                  <div className="card-footer text-center">
                    <a href="#pablo" className="btn btn-just-icon btn-linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#pablo" className="btn btn-just-icon btn-dribbble">
                      <i className="fa fa-dribbble"></i>
                    </a>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-profile card-plain">
                  <div className="card-body">
                    <div className="card-avatar">
                      <a href="#avatar">
                        <img
                          src="../assets/img/faces/joe-gardner-2.jpg"
                          alt="..."
                        />
                        <h4 className="card-title">Sophia West</h4>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </div>
                  <div className="card-footer text-center">
                    <a href="#pablo" className="btn btn-just-icon btn-linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#pablo" className="btn btn-just-icon btn-dribbble">
                      <i className="fa fa-dribbble"></i>
                    </a>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-pinterest"
                    >
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-profile card-plain">
                  <div className="card-body">
                    <div className="card-avatar">
                      <a href="#avatar">
                        <img
                          src="../assets/img/faces/clem-onojeghuo-2.jpg"
                          alt="..."
                        />
                        <h4 className="card-title">Lucas Andrew</h4>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Great teams do not hold back with one another. They are
                      unafraid to air their dirty laundry. They admit their
                      mistakes, their weaknesses and their concerns without fear
                      of reprisal.
                    </p>
                  </div>
                  <div className="card-footer text-center">
                    <a href="#pablo" className="btn btn-just-icon btn-youtube">
                      <i className="fa fa-youtube"></i>
                    </a>
                    <a href="#pablo" className="btn btn-just-icon btn-twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="more-info">Need more information?</h3>
            <div className="row coloured-cards">
              <div className="col-md-4 col-sm-6">
                <div className="card-big-shadow">
                  <div
                    className="card card-just-text"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <div className="card-body">
                      <h6 className="card-category">Best cards</h6>
                      <h4 className="card-title">
                        <a href="#paper-kit">Blue Card</a>
                      </h4>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card-big-shadow">
                  <div
                    className="card card-just-text"
                    data-background="color"
                    data-color="green"
                    data-radius="none"
                  >
                    <div className="card-body">
                      <h6 className="card-category">Best cards</h6>
                      <h4 className="card-title">
                        <a href="#paper-kit">Green Card</a>
                      </h4>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card-big-shadow">
                  <div
                    className="card card-just-text"
                    data-background="color"
                    data-color="yellow"
                    data-radius="none"
                  >
                    <div className="card-body">
                      <h6 className="card-category">Best cards</h6>
                      <h4 className="card-title">
                        <a href="#paper-kit">Yellow Card</a>
                      </h4>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
