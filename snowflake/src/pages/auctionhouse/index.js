import React, { useEffect } from "react";

export default function AuctionHouse() {
  useEffect(() => {
    window.pk.initSliders();
  });

  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(../assets/img/ecommerce/balmain_runway.jpg)",
        }}
      >
        <div className="filter"></div>
        <div className="content-center">
          <div className="container text-center">
            <h1>Brace yourself!</h1>
            <h3>25% Off and Free global delivery for all products</h3>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="section latest-offers">
          <div className="container">
            <h3 className="section-title">Latest Offers</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-product card-plain">
                  <div className="card-image">
                    <a href="#paper-kit">
                      <img
                        src="../assets/img/ecommerce/balmain_5.jpg"
                        alt=""
                        className="img-rounded img-responsive"
                      />
                    </a>
                    <div className="card-body">
                      <div className="card-description">
                        <h5 className="card-title">Green Velvet Dress</h5>
                        <p className="card-description">
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div className="price">
                        <s>3.520 &euro;</s>{" "}
                        <span className="text-danger">2.900 &euro;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-product card-plain">
                  <div className="card-image">
                    <a href="#paper-kit">
                      <img
                        src="../assets/img/ecommerce/balmain_3.jpg"
                        alt=""
                        className="img-rounded img-responsive"
                      />
                    </a>
                    <div className="card-body">
                      <div className="card-description">
                        <h5 className="card-title">Crepe and Organza Dress</h5>
                        <p className="card-description">
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div className="price">
                        <s>2.675 &euro;</s>{" "}
                        <span className="text-danger">2.000 &euro;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-product card-plain">
                  <div className="card-image">
                    <a href="#paper-kit">
                      <img
                        src="../assets/img/ecommerce/balmain_4.jpg"
                        alt=""
                        className="img-rounded img-responsive"
                      />
                    </a>
                    <div className="card-body">
                      <div className="card-description">
                        <h5 className="card-title">Lace Mini Dress</h5>
                        <p className="card-description">
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div className="price">
                        <s>3.915 &euro;</s>{" "}
                        <span className="text-danger">3.125 &euro;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-gray">
          <div className="container">
            <h3 className="section-title">Find what you need</h3>
            <div className="row">
              <div className="col-md-3">
                <div className="card card-refine">
                  <div
                    className="panel-group"
                    id="accordion"
                    aria-multiselectable="true"
                    aria-expanded="true"
                  >
                    <div
                      className="card-header card-collapse"
                      role="tab"
                      id="priceRanger"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          className=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#priceRange"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Price Range
                          <i className="nc-icon nc-minimal-down"></i>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="priceRange"
                      className="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="card-body">
                        <div
                          id="sliderDouble"
                          className="slider slider-info noUi-target noUi-ltr noUi-horizontal noUi-background"
                        ></div>
                      </div>
                    </div>
                    <div
                      className="card-header card-collapse"
                      role="tab"
                      id="clothingGear"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          className=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#clothing"
                          aria-expanded="true"
                          aria-controls="collapseSecond"
                        >
                          Clothing
                          <i className="nc-icon nc-minimal-down"></i>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="clothing"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                              checked
                            />
                            Blazers
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Casual Shirts
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Formal Shirts
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Jeans
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Polos
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Pyjamas
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Shorts
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Trousers
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-header card-collapse"
                      role="tab"
                      id="designer"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          className=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#refineDesigner"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          Designer
                          <i className="nc-icon nc-minimal-down"></i>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="refineDesigner"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              checked
                              onChange={() => {}}
                            />
                            All
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Acne Studio
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Alex Mill
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Alexander McQueen
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Alfred Dunhill
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            AMI
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Berena
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Berluti
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Burberry Prorsum
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Berluti
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Calvin Klein
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Club Monaco
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Dolce & Gabbana
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Gucci
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Kolor
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Lanvin
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Loro Piana
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Massimo Alba
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-header card-collapse"
                      role="tab"
                      id="color"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          className=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#colorMaker"
                          aria-expanded="true"
                          aria-controls="collapseTree"
                        >
                          Colour
                          <i className="nc-icon nc-minimal-down"></i>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="colorMaker"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              checked
                              onChange={() => {}}
                            />
                            All
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Blue
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Brown
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Gray
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Green
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Neutrals
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={() => {}}
                            />
                            Purple
                            <span className="form-check-sign"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="products">
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <div className="card card-product card-plain">
                        <div className="card-image">
                          <a href="#paper-kit">
                            <img
                              src="../assets/img/ecommerce/balmain_1.jpg"
                              alt=""
                              className="img-rounded img-responsive"
                            />
                          </a>
                          <div className="card-body">
                            <div className="card-description">
                              <h5 className="card-title">One Shoulder Dress</h5>
                              <p className="card-description">
                                Dresses & Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>2.900 &euro;</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="card card-product card-plain">
                        <div className="card-image">
                          <a href="#paper-kit">
                            <img
                              src="../assets/img/ecommerce/balmain_2.jpg"
                              alt=""
                              className="img-rounded img-responsive"
                            />
                          </a>
                          <div className="card-body">
                            <div className="card-description">
                              <h5 className="card-title">Stretch-Knit Dress</h5>
                              <p className="card-description">
                                Dresses & Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>1.700 &euro;</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="card card-product card-plain">
                        <div className="card-image">
                          <a href="#paper-kit">
                            <img
                              src="../assets/img/ecommerce/balmain_2.jpg"
                              alt=""
                              className="img-rounded img-responsive"
                            />
                          </a>
                          <div className="card-body">
                            <div className="card-description">
                              <h5 className="card-title">
                                Chrystal Sheer Dress
                              </h5>
                              <p className="card-description">
                                Dresses & Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>1.500 &euro;</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="card card-product card-plain">
                        <div className="card-image">
                          <a href="#paper-kit">
                            <img
                              src="../assets/img/ecommerce/balmain_2.jpg"
                              alt=""
                              className="img-rounded img-responsive"
                            />
                          </a>
                          <div className="card-body">
                            <div className="card-description">
                              <h5 className="card-title">One Shoulder Dress</h5>
                              <p className="card-description">
                                Dresses & Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>2.600 &euro;</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="card card-product card-plain">
                        <div className="card-image">
                          <a href="#paper-kit">
                            <img
                              src="../assets/img/ecommerce/balmain_8.jpg"
                              alt=""
                              className="img-rounded img-responsive"
                            />
                          </a>
                          <div className="card-body">
                            <div className="card-description">
                              <h5 className="card-title">Glass Beads Skirt</h5>
                              <p className="card-description">
                                Dresses & Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>7.500 &euro;</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="card card-product card-plain">
                        <div className="card-image">
                          <a href="#paper-kit">
                            <img
                              src="../assets/img/ecommerce/balmain_8.jpg"
                              alt=""
                              className="img-rounded img-responsive"
                            />
                          </a>
                          <div className="card-body">
                            <div className="card-description">
                              <h5 className="card-title">Velvet Mini Dress</h5>
                              <p className="card-description">
                                Dresses & Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>3.500 &euro;</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 offset-md-4">
                      <button
                        rel="tooltip"
                        title="This is a morphing button"
                        className="btn btn-round btn-outline-default"
                        id="successBtn"
                        data-toggle="morphing"
                        data-rotation-color="gray"
                      >
                        Load more...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-blog">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-image">
                    <a href="#pablo">
                      <img
                        className="img img-raised"
                        src="../assets/img/sections/miguel-perales.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h6 className="card-category text-info">Enterprise</h6>
                    <h5 className="card-title">
                      <a href="#pablo">LinkedIn’s new desktop app arrives</a>
                    </h5>
                    <p className="card-description">
                      LinkedIn is today launching its official desktop
                      application for Windows 10, allowing the professional
                      social networking service to... <br />
                    </p>
                    <hr />
                    <div className="card-footer">
                      <div className="author">
                        <a href="#pablo">
                          <img
                            src="../assets/img/faces/ayo-ogunseinde-2.jpg"
                            alt=""
                            className="avatar img-raised"
                          />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o" aria-hidden="true"></i> 5
                        min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-image">
                    <a href="#pablo">
                      <img
                        className="img img-raised"
                        src="../assets/img/sections/roger-keller.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h6 className="card-category text-success">Startups</h6>
                    <h5 className="card-title">
                      <a href="#pablo">
                        MIT’s Cheetah 3 robot is built to save lives
                      </a>
                    </h5>
                    <p className="card-description">
                      The latest version of MIT’s Cheetah robot made its stage
                      debut today at TC Sessions: Robotics in Cambridge, Mass.
                      It’s a familiar project... <br />
                    </p>
                    <hr />
                    <div className="card-footer">
                      <div className="author">
                        <a href="#pablo">
                          <img
                            src="../assets/img/faces/kaci-baum-2.jpg"
                            alt=""
                            className="avatar img-raised"
                          />
                          <span>Nickie Kelly</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o" aria-hidden="true"></i> 5
                        min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-image">
                    <a href="#pablo">
                      <img
                        className="img img-raised"
                        src="../assets/img/sections/joshua-earlesz.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h6 className="card-category text-danger">
                      <i
                        className="fa fa-free-code-camp"
                        aria-hidden="true"
                      ></i>{" "}
                      Enterprise
                    </h6>
                    <h5 className="card-title">
                      <a href="#pablo">
                        Lionel Richie says “Hello” to startup investors
                      </a>
                    </h5>
                    <p className="card-description">
                      Because developing a doctor-on-demand service that would
                      allow personalized medical visits, booked through an app
                      on a user’s phone is... <br />
                    </p>
                    <hr />
                    <div className="card-footer">
                      <div className="author">
                        <a href="#pablo">
                          <img
                            src="../assets/img/faces/erik-lucatero-2.jpg"
                            alt=""
                            className="avatar img-raised"
                          />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o" aria-hidden="true"></i> 5
                        min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-line subscribe-line-black">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-sm-8">
                <form className="">
                  <div className="form-group">
                    <input
                      type="text"
                      value=""
                      onChange={() => {}}
                      className="form-control"
                      placeholder="Enter your email..."
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-3 col-sm-4">
                <button
                  type="button"
                  className="btn btn-neutral btn-block btn-lg"
                >
                  Join Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
