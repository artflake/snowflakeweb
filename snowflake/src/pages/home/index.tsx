import React from "react";
             /* <a 
                href=""
                className="btn btn-neutral btn-round"
              >
                <i className="fa fa-play"></i>Watch video
              </a> */
export default function Home() {
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
              <h1 className="title">The only Art Coin.</h1>
              <h3 className="description">Use anywhere you can use an a Coin or NFT.</h3>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="section text-center landing-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h2 className="title">Flake is the Only real NFT Coin.</h2>
                <h5>
                Normally, cryptocurrency doesn't really look like anything - it’s all numbers under the hood right?  Every Flake coin is absolutely unique, and each coin is an image, or sound file or movie. Each coin is an NFT!  You cannot subdivide our coins (e.g. no “satoshis”), but rather each coin is also one full NFT.   These coins can be traded 24/7/365 on exchanges, or an individual coin can be sold on any NFT auction house - because we are the only place that can mint NFTs that are also coins.  No one else has this kind of compatibility.
                </h5>
                <br />
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-palette"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">The NFT DAO</h4>
                    <p className="description">
                    We are an organization for the arts.  The Art Flake DAO is the very first NFT collection that is community driven, where anyone can participate if they mint a coin.  We have no “pre-mine” coins are minted by the community only when art is submitted.  Any artist can come to us and we can mint a liquid NFT of their work. We are the only project where NFTs have a guaranteed immediate value and can be traded for any ERC20 token through platforms like Uniswap.
                    </p>
                    <a href="#pkp" className="btn btn-link btn-danger">
                      See more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-bulb-63"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">NFTs Liquid Assets </h4>
                    <p>
                    The art world requires you to find a bidder, finding an immediate buyer is unusual and in many cases not possible.  If you think of an NFT as a kind of magic picture frame, we give that picture frame an immediate value that it can be liquidated.  So does this mean you can use your NFT to pay for your meal at a restaurant?  Well, possibly - any time of day or night you can immediately convert your Flake into an ERC20 - and if the restaurant or business takes ERFC20 tokens, then yes!  Exchanges like PayPal will exchange erc20 tokens into cash - and then you can use a PayPal account or PayPal card to pay a vendor.
                    </p>
                    <a href="#pkp" className="btn btn-link btn-danger">
                      See more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-chart-bar-32"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">NFT Patronage</h4>
                    <p>
                    It is hard being an artist. So we are launching a patronage platform that allows artists to sell their work to someone who wants to mint a Flake.   When creating a new flake, you can choose to upload your own art - or you can buy art from our Patronage Marketplace.  This is where aspiring NFT artists can list their works for a price they would like.

                    </p>
                    <a href="#pkp" className="btn btn-link btn-danger">
                      See more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-sun-fog-29"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Limited Edition, Deflationary</h4>
                    <p>
                    There will only ever be 1 Million Flakes ever minted. This is a hard cap set by the solidity contract that makes up the coin, this cannot be changed by anyone - not even us.  Once a Flake is created - it is yours and we cannot take it from you. It is yours to sell or trade, and display.  Once the million is up, no new coins can be minted creating market scarcity - which in theory will drive prices up.
                    </p>
                    <a href="#pkp" className="btn btn-link btn-danger">
                      See more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-dark text-center landing-section">
          <div className="container">
            <h2 className="title">Advanced - Support for ERC-20, ERC-1636 and ERC-721</h2>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
        <div className="section landing-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h2 className="text-center">Keep in touch?</h2>
                m@flake.art
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
