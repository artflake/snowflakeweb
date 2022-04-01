import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface State {
  activity: any[];
  art: any[];
  listings: any[];
  properties: any;
}

export default function Art() {
  const navigate = useNavigate();

  const [state, setState] = useState<State>({
    listings: [],
    activity: [],
    art: [],
    properties: {},
  });

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((response) => {
        const { properties = {} } = response;
        const { listings = [], activity = [], art = [] } = properties;

        setState({
          listings,
          art,
          activity,
          properties,
        });
      });
  }, []);

  const { properties, listings, activity, art } = state;

  return (
    <div className="main padding-top">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="card custom-card">
                    <div className="card-image">
                      <a href="#pablo">
                        <img
                          className="img img-raised"
                          alt="art"
                          src={
                            properties &&
                            properties.image &&
                            properties.image.description
                          }
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="card-footer">
                        <div className="stats">
                          <i className="fa fa-heart-o" aria-hidden="true"></i> 5
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div id="acordeon">
                    <div
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="card no-transition">
                        <div
                          className="card-header card-collapse"
                          role="tab"
                          id="headingOne"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              Description
                              <i className="nc-icon nc-minimal-down"></i>
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                        >
                          <div className="card-body">
                            <p className="name">
                              Created by
                              <a href="/">
                                {properties &&
                                  properties.createdby &&
                                  properties.createdby.description}
                              </a>
                            </p>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  properties &&
                                  properties.artDescription &&
                                  properties.artDescription.description,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div
                          className="card-header card-collapse"
                          role="tab"
                          id="headingTwo"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              About Artificial Intelligence Art
                              <i className="nc-icon nc-minimal-down"></i>
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                        >
                          <div className="card-body">
                            {properties &&
                              properties.description &&
                              properties.description.description}
                          </div>
                        </div>
                        <div
                          className="card-header card-collapse"
                          role="tab"
                          id="headingThree"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Details
                              <i className="nc-icon nc-minimal-down"></i>
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <div className="card-body">
                            <div className="card-row pb-2 pt-2">
                              <span>Contract Address</span>
                              <a href="/">
                                {properties &&
                                  properties.address &&
                                  properties.address.description}
                              </a>
                            </div>
                            <div className="card-row pb-2 pt-2">
                              <span>Token ID</span>
                              <span>
                                {properties &&
                                  properties.tokenId &&
                                  properties.tokenId.description}
                              </span>
                            </div>
                            <div className="card-row pb-2 pt-2">
                              <span>Token Standard</span>
                              <span>
                                {properties &&
                                  properties.tokenStandard &&
                                  properties.tokenStandard.description}
                              </span>
                            </div>
                            <div className="card-row pb-2 pt-2">
                              <span>Blockchain</span>
                              <span>
                                {properties &&
                                  properties.blockchain &&
                                  properties.blockchain.description}
                              </span>
                            </div>
                            <div className="card-row pb-2 pt-2">
                              <span>Metadata</span>
                              <span>
                                {properties &&
                                  properties.metadata &&
                                  properties.metadata.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 art-details">
              <div className="row">
                <div className="col-md-12">
                  <h3>
                    <a className="" href="/">
                      {properties &&
                        properties.profileTitle &&
                        properties.profileTitle.description}
                    </a>
                  </h3>
                </div>
                <div className="col-md-12">
                  <h3 className="title">
                    {properties &&
                      properties.name &&
                      properties.name.description}
                  </h3>
                </div>
                <div className="col-md-12 user-info">
                  <span>
                    Owned by{" "}
                    <a href="/">
                      {properties &&
                        properties.user &&
                        properties.user.description}
                    </a>
                  </span>
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    <span>
                      {properties &&
                        properties.views &&
                        properties.views.description}
                    </span>{" "}
                    views
                  </span>
                  <span>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <span>
                      {properties &&
                        properties.favorite &&
                        properties.favorite.description}
                    </span>{" "}
                    favorites
                  </span>
                </div>
                <div className="col-md-12">
                  <div
                    className="
                      buy-info
                      d-flex
                      flex-column
                      justify-content-center
                      mt-3
                      mb-3
                    "
                  >
                    <span className="price-title mt-1 mb-1">Current price</span>
                    <div className="mt-1 mb-1 d-flex align-items-center">
                      <img
                        className="icon"
                        src="/assets/img/ethereum.svg"
                        alt="price"
                      />
                      <span className="value ml-2 mr-2">
                        {properties &&
                          properties.price &&
                          properties.price.description}
                      </span>
                      <span className="price">
                        ($
                        {properties &&
                          properties.priceUsd &&
                          properties.priceUsd.description}
                        )
                      </span>
                    </div>
                    <div className="mt-1 mb-1">
                      <button className="btn btn-primary mr-1">Buy now</button>
                      <button className="btn btn-outline-primary">
                        Make offer
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div id="acordeon2">
                    <div
                      id="accordionListing"
                      className="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="card no-transition">
                        <div
                          className="card-header card-collapse"
                          role="tab"
                          id="headingListing"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionListing"
                              href="#collapseList"
                              aria-expanded="false"
                              aria-controls="collapseList"
                            >
                              Listings
                              <i className="nc-icon nc-minimal-down"></i>
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseList"
                          className="collapse show"
                          role="tabpanel"
                          aria-labelledby="headingListing"
                        >
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>Price</th>
                                    <th>USD Price</th>
                                    <th>Expiration</th>
                                    <th>From</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listings.map(({ properties }, i) => (
                                    <tr key={i}>
                                      <td>
                                        <img
                                          className="icon"
                                          src="/assets/img/ethereum.svg"
                                          alt="price"
                                        />
                                        <strong>
                                          {properties.price.description}
                                        </strong>{" "}
                                        <span>ETH</span>
                                      </td>
                                      <td>
                                        ${properties.priceUsd.description}
                                      </td>
                                      <td>
                                        {properties.expiration.description ||
                                          "-"}
                                      </td>
                                      <td>
                                        <a href="/">
                                          {properties.from.description}
                                        </a>
                                      </td>
                                      <td>
                                        <button className="btn btn-outline-primary">
                                          Buy
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="accordionOffers"
                      className="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="card no-transition">
                        <div
                          className="card-header card-collapse"
                          role="tab"
                          id="headingOffers"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionOffers"
                              href="#collapseOffers"
                              aria-expanded="false"
                              aria-controls="collapseOffers"
                            >
                              Offers
                              <i className="nc-icon nc-minimal-down"></i>
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseOffers"
                          className="collapse show"
                          role="tabpanel"
                          aria-labelledby="headingOffers"
                        >
                          <div className="card-body">
                            <p className="no-text">No offers yet</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div
                id="accordionActivity"
                className="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="card no-transition">
                  <div
                    className="card-header card-collapse"
                    role="tab"
                    id="headingActivity"
                  >
                    <h5 className="mb-0 panel-title">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordionActivity"
                        href="#collapseActivity"
                        aria-expanded="false"
                        aria-controls="collapseActivity"
                      >
                        Item Activity
                        <i className="nc-icon nc-minimal-down"></i>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseActivity"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingActivity"
                  >
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Event</th>
                              <th>Price</th>
                              <th>From</th>
                              <th>To</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {activity.map(({ properties }, i) => (
                              <tr key={i}>
                                <td>
                                  <i
                                    className="fa fa-tag"
                                    aria-hidden="true"
                                  ></i>
                                  {properties.event.description}
                                </td>
                                <td>
                                  <img
                                    className="icon mr-1"
                                    src="/assets/img/ethereum.svg"
                                    alt="price-2"
                                  />
                                  <strong>
                                    {properties.price.description}
                                  </strong>{" "}
                                  <span>ETH</span>
                                </td>
                                <td>
                                  <a href="/">{properties.from.description}</a>
                                </td>
                                <td>{properties.to.description}</td>
                                <td>{properties.date.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="more-title">More from this collection</h4>
              <br />
            </div>
            <div className="col-md-12">
              <div className="row">
                {art.map(({ properties }, i) => (
                  <div key={i} className="col-md-4">
                    <div className="card card-blog">
                      <div className="card-image">
                        <a href="#pablo">
                          <img
                            className="img img-raised"
                            src={properties.image.description}
                            alt="art"
                          />
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="card-row">
                          <span className="user">
                            {properties.profileTitle.description}
                          </span>
                          <span className="price-title">Price</span>
                        </div>
                        <div className="card-row">
                          <span className="name">
                            {properties.name.description}
                          </span>
                          <span className="price d-flex justify-content-center align-items-center">
                            <img
                              className="icon mr-1"
                              src="/assets/img/ethereum.svg"
                              alt="price-3"
                            />
                            {properties.price.description}
                          </span>
                        </div>
                        <div className="card-row-right">
                          <span className="last">Last</span>
                          <span className="price-small d-flex justify-content-center align-items-center">
                            <img
                              className="icon"
                              src="/assets/img/ethereum.svg"
                              alt="price-4"
                            />
                            {properties.lastPrice.description}
                          </span>
                        </div>
                        <hr />
                        <div className="card-footer">
                          <div className="author">
                            <a href="#pablo"> Buy </a>
                          </div>
                          <div className="stats">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                            {properties.favorite.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-12 text-center mt-3 mb-3">
              <button className="btn btn-primary" onClick={() => navigate('/user/')}>
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
