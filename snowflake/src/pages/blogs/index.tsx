import React from "react";

export default function Blogs() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="section section-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto text-center title">
                <h2>A place for storytelling</h2>
                <h3 className="title-uppercase">
                  <small>Written by designers for designers</small>
                </h3>
              </div>
            </div>
            <div className="article">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <div className="card card-blog card-plain text-center">
                    <div className="card-image">
                      <a href="#pablo">
                        <img
                          className="img img-raised"
                          src="/assets/img/sections/bruno-abatti.jpg"
                          alt="blog1"
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="card-category">
                        <span className="badge badge-primary main-tag">
                          Featured
                        </span>
                      </div>
                      <a href="javascrip: void(0);">
                        <h3 className="card-title">
                          My Review of Pitchfork’s ‘Indie 500’ Album Review
                        </h3>
                      </a>
                      <div className="card-description">
                        <p>
                          In the first sentence of Pitchfork’s review of my
                          collaborative project with 9th Wonder, INDIE 500, a
                          reviewer who is associated with music review site
                          rhapsody.com writes about how I criticize and then
                          distance myself from “celebrity straw men” with the
                          line “celebrities be making money...
                        </p>
                      </div>
                    </div>
                    <button className="btn btn-danger btn-round btn-sm">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <br />
            <br />
            <div className="article">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <div className="card card-blog card-plain text-center">
                    <div className="card-image">
                      <a href="#pablo">
                        <img
                          className="img img-raised"
                          src="/assets/img/sections/federico-beccari.jpg"
                          alt="blog2"
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="card-category">
                        <span className="badge badge-info main-tag">
                          Popular
                        </span>
                      </div>
                      <a href="javascrip: void(0);">
                        <h3 className="card-title">
                          You Should Get Excited About Virtual Reality.
                        </h3>
                        <h6 className="title-uppercase">October 20, 2016</h6>
                      </a>
                      <div className="card-description">
                        <p>
                          In the first sentence of Pitchfork’s review of my
                          collaborative project with 9th Wonder, INDIE 500, a
                          reviewer who is associated with music review site
                          rhapsody.com writes about how I criticize and then
                          distance myself from “celebrity straw men” with the
                          line “celebrities be making money...
                        </p>
                      </div>
                    </div>
                    <button className="btn btn-danger btn-round btn-sm">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <br />
            <br />
            <div className="article">
              <div className="col-md-8 ml-auto mr-auto">
                <div className="card card-blog card-plain text-center">
                  <div className="card-image">
                    <a href="#pablo">
                      <img
                        className="img img-raised"
                        src="/assets/img/sections/leonard-cotte.jpg"
                        alt="blog3"
                      />
                      <p className="image-thumb">Photo by Cam Adams</p>
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="card-category">
                      <span className="badge badge-warning main-tag">
                        Trending
                      </span>
                    </div>
                    <a href="javascrip: void(0);">
                      <h3 className="card-title">
                        Make Somebody Nervous Before You Die
                      </h3>
                      <h6 className="title-uppercase">October 20, 2016</h6>
                    </a>
                    <div className="card-description">
                      <p>
                        You won’t find many concepts that are very useful or
                        important if you insist on having a worldview that’s
                        void of controversy, invulnerable to criticism, and
                        incapable of making others feel confused...
                      </p>
                    </div>
                  </div>
                  <button className="btn btn-danger btn-round btn-sm">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <div className="pull-left">
                  <button className="btn btn-link btn-default btn-move-left btn-sm">
                    {" "}
                    <i className="fa fa-angle-left"></i> Older Posts
                  </button>
                </div>
                <div className="pull-right">
                  <button className="btn btn-link btn-default btn-move-right btn-sm">
                    Newer Posts <i className="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
