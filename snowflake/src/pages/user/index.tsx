import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

interface Profile {
  description: string;
  floorPrice: number;
  items: string;
  owners: string;
  title: string;
  username: string;
  volumeTraded: number;
}

interface State {
  profile: Profile | null;
  art: any[];
  total: number;
  artList: any[];
}

const NO_OF_ITEMS = 6;

export default function User() {
  const [state, setState] = useState<State>({
    profile: null,
    art: [],
    total: 0,
    artList: [],
  });

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((response) => {
        const { profile = {}, art = [], total = 0 } = response;
        setState({
          profile,
          art,
          total,
          artList: art.slice(0, NO_OF_ITEMS),
        });
      });
  }, []);

  const loadMore = () => {
    let { artList, art } = state;
    artList = [
      ...artList,
      ...art.slice(artList.length, NO_OF_ITEMS + artList.length),
    ];
    setState({
      ...state,
      artList,
    });
  };

  const { profile, artList, total } = state;

  return (
    <div className="wrapper padding-top">
      <div className="bg">
        <img src="background" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="profile">
              <div className="image-button-container">
                <div className="image-container">
                  <img src="profile" alt="profile" />
                </div>
              </div>
              <div className="title text-center">
                <h2>
                  <b>{profile && profile.title}</b>
                </h2>
              </div>
              <div className="created-by text-center mb-2">
                <span>Created by </span>
                <a href="/">{profile && profile.username}</a>
              </div>
              <div className="description">
                <div
                  className="markdown"
                  dangerouslySetInnerHTML={{
                    __html: (profile && profile.description) || "",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-md-4">
              <select className="form-control mb-3">
                <option>Single Items</option>
                <option>All Items</option>
                <option>Bundles</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-control mb-3">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Bundles</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-3">
              <b>1,000 results</b>
            </div>
          </div>
          <div className="row">
            {artList.map(({ properties }, i) => (
              <div key={i} className="col-md-4">
                <div className="card card-blog">
                  <div className="card-image">
                    <Link to="/user/1/">
                      <img
                        className="img img-raised"
                        src={properties.image.description}
                        alt="art"
                      />
                    </Link>
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
                          alt="price"
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
                          alt="last-price"
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
          <div className="row mt-5 mb-5">
            <div className="col-md-12 text-center">
              {artList.length<total?<button
                className="btn btn-primary"
                id="loadMoreBtn"
                onClick={loadMore}
              >
                Load More
              </button>:null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
