import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./Home.css";
import Art from "components/Art";

interface State {
  artList: any[];
}

export default function Home() {
  const [state, setState] = useState<State>({
    artList: [],
  });

  useEffect(() => {
    fetch("/assets/data/featured.json")
      .then((res) => res.json())
      .then((response) => {
        setState({
          artList: [...response, ...response],
        });
      });
  }, []);

  const { artList } = state;
  return (
    <>
      <div className="page-header" data-parallax="true">
        <video autoPlay muted loop id="myVideo">
          <source
            src="../assets/video/Snowflake_Overlay.mp4"
            type="video/mp4"
          />
        </video>
        <div className="filter"></div>
        <div className="content-center">
          <div className="container">
            <div className="motto">
              <h1 className="title">Click below to access our light paper</h1>
              <a className="btn btn-primary" rel="noreferrer" target="_blank" href="https://google.com/">Read now</a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {/* <div className="section text-center landing-section" id="core">
          <div className="related-articles">
            <h3 className="title">Featured arts</h3>
            <legend></legend>
            <div className="container">
              {artList.length && (
                <OwlCarousel items={3} margin={8} autoplay={true}>
                  {artList.map(({ properties }, i) => (
                    <Art
                      key={i}
                      image={properties.image.description}
                      profileTitle={properties.profileTitle.description}
                      name={properties.name.description}
                      user={properties.user.description}
                      description={properties.description.description}
                      profileImage={properties.profileImage.description}
                      featured
                    />
                  ))}
                </OwlCarousel>
              )}
            </div>
          </div>
        </div> */}
        {/* <div className="section landing-section">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <h3 className="title">The Art Flake DAO</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="mb-3">Tech One Liner:</h4>
                    <p>
                      The only real NFT coin, where every coin, is a unique
                      piece of art.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mb-3">Crypto One Liner:</h4>
                    <p>
                      An asset that is compatible with both ERC20 and ERC721
                      ecosystems, it is both a coin and an NFT - backed by a
                      single ledger.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="section section-dark text-center landing-section"
          id="team"
        >
          {/* <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 id="team" className="title mt-3 mb-5">
                  The Team
                </h2>
              </div>
            </div>
            <div className="flex-row-switch pt-4 row">
              <div className="col-md-5 offset-1">
                <div className="flex-card">
                  <div className="card card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#avatar">
                        <img
                          src="assets/img/faces/michael_circle.jpeg"
                          alt="Founder"
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="https://www.linkedin.com/in/mike-brooks-32a5917a/">
                        <div className="author">
                          <h4 className="card-title">Michael Brooks</h4>
                          <h6 className="card-category text-muted">
                            Founder/Biohacker
                          </h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        Previously led the Red Team at Snap Inc., Hacker, and
                        now a biohacker.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 offset-md-1">
                <div className="flex-card">
                  <div className="card card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#avatar">
                        <img
                          style={{ objectFit: "cover" }}
                          src="assets/img/faces/mack.jpeg"
                          alt="Founder"
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="/">
                        <div className="author">
                          <h4 className="card-title">Mack</h4>
                          <h6 className="card-category text-muted">
                            Co-founder
                          </h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="section landing-section section-dark text-center">
          <h1 className="mb-5 contact pl-2 pr-2">contact@flake.art</h1>
        </div>
      </div>
    </>
  );
}
