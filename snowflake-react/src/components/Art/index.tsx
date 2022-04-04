import React from "react";
import { Link } from "react-router-dom";

import { textTrim } from "../../utils";

interface IProps {
  image: string;
  profileTitle: string;
  name: string;
  price?: number;
  lastPrice?: number;
  favorite?: number;
  user?: string;
  id?:number;
  description?: string;
  profileImage?: string;
  featured?: boolean;
}

export default function Art({
  image,
  profileTitle,
  name,
  price,
  lastPrice,
  favorite,
  user,
  id,
  description,
  profileImage,
  featured,
}: IProps) {
  return (
    <div className="col-md-4">
      <div className={`card card-blog ${featured ? "no-animation" : ""}`}>
        <div className="card-image">
          <Link to={`/${user}/${id}/`}>
            <img className="img img-raised" src={image} alt="art" />
          </Link>
        </div>
        <div className="card-body">
          {!featured ? (
            <>
              <div className="card-row">
                <span className="user">{profileTitle}</span>
                <span className="price-title">Price</span>
              </div>
              <div className="card-row">
                <span className="name">{name}</span>
                <span className="price d-flex justify-content-center align-items-center">
                  <img
                    className="icon mr-1"
                    src="/assets/img/ethereum.svg"
                    alt="price"
                  />
                  {price}
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
                  {lastPrice}
                </span>
              </div>
              <hr />
              <div className="card-footer">
                <div className="author">
                  <a href="#pablo"> Buy </a>
                </div>
                <div className="stats">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                  {favorite}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="image-button-container-small">
                <div className="image-container-small">
                  <Link className="link" to={`/user/${user}`}>
                    <img src={profileImage} alt="profile" />
                  </Link>
                </div>
              </div>
              <div className="card-row2 text-center">
                <span className="name">{name}</span>
              </div>
              <div className="card-row2 text-center">
                <span>by</span>&nbsp;
                <Link className="link" to={`/user/${user}`}>
                  {user}
                </Link>
              </div>
              <div className="card-row2 text-center my-3 description">
                <span className="name">{textTrim(description)}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
