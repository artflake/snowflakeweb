import React, { useEffect, useState } from "react";
import "./Auction.css";

const profiles = [
  {
    rank: 1,
    image:
      "https://f8n-production.imgix.net/creators/profile/uysnl09wx-azerty-png-q823jc.png?q=45&w=50&h=50&auto=format%2Ccompress&fit=crop&dpr=2",
    name: "Missing Watcher",
    username: "@missingwatcher",
    uniqueCollectors: 1,
    nftSold: 1,
    primarySales: {
      etherium: 14.52,
      price: 45285.85,
    },
    secondarySales: {
      etherium: 0,
      price: 0.0,
    },
  },
  {
    rank: 2,
    image:
      "https://f8n-production.imgix.net/creators/profile/twsx9352x-avata-png-sko4ok.png?q=45&w=50&h=50&auto=format%2Ccompress&fit=crop&dpr=2",
    name: "Missing Watcher",
    username: "@missingwatcher",
    uniqueCollectors: 1,
    nftSold: 1,
    primarySales: {
      etherium: 14.52,
      price: 45285.85,
    },
    secondarySales: {
      etherium: 0,
      price: 0.0,
    },
  },
  {
    rank: 3,
    image:
      "https://f8n-production.imgix.net/creators/profile/k3e4u0maj-dsc02476-jpg-y28ca6.jpg?q=45&w=50&h=50&auto=format%2Ccompress&fit=crop&dpr=2",
    name: "Missing Watcher",
    username: "@missingwatcher",
    uniqueCollectors: 1,
    nftSold: 1,
    primarySales: {
      etherium: 14.52,
      price: 45285.85,
    },
    secondarySales: {
      etherium: 0,
      price: 0.0,
    },
  },
  {
    rank: 4,
    image:
      "https://f8n-production.imgix.net/creators/profile/k90m5l32t-tttt-jpg-j3l3q6.jpg?q=45&w=50&h=50&auto=format%2Ccompress&fit=crop&dpr=2",
    name: "Missing Watcher",
    username: "@missingwatcher",
    uniqueCollectors: 1,
    nftSold: 1,
    primarySales: {
      etherium: 14.52,
      price: 45285.85,
    },
    secondarySales: {
      etherium: 0,
      price: 0.0,
    },
  },
  {
    rank: 5,
    image:
      "https://f8n-production.imgix.net/creators/profile/w0fmvmhpq-pfp-nips-jpg-j29s0z.jpg?q=45&w=50&h=50&auto=format%2Ccompress&fit=crop&dpr=2",
    name: "Missing Watcher",
    username: "@missingwatcher",
    uniqueCollectors: 1,
    nftSold: 1,
    primarySales: {
      etherium: 14.52,
      price: 45285.85,
    },
    secondarySales: {
      etherium: 0,
      price: 0.0,
    },
  },
];
export default function Auction() {
  const [active, setActive] = useState("Creators");
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    if (!window.pk) {
      window.pk.initSliders();
    }
  });

  const changeTab = (active) => {
    setActive(active);
  };

  const changeDaysTab = (activeDay) => {
    setActiveDay(activeDay);
  };

  return (
    <div className="wrapper padding-top auction">
      <div className="main">
        <div className="section section-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1><strong>Trending Creators</strong></h1>
              </div>
              <div className="col-md-12 mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="tabs">
                    <strong
                      className={`tab ${active === "Creators" ? "active" : ""}`}
                      onClick={() => changeTab("Creators")}
                    >
                      Creators
                    </strong>
                    <strong
                      className={`tab ${
                        active === "Collectors" ? "active" : ""
                      }`}
                      onClick={() => changeTab("Collectors")}
                    >
                      Collectors
                    </strong>
                    <strong
                      className={`tab ${
                        active === "Collections" ? "active" : ""
                      }`}
                      onClick={() => changeTab("Collections")}
                    >
                      Collections
                    </strong>
                  </div>
                  <div className="tabs">
                    <strong
                      className={`tab2 ${activeDay === "1d" ? "active" : ""}`}
                      onClick={() => changeDaysTab("1d")}
                    >
                      1d
                    </strong>
                    <strong
                      className={`tab2 ${activeDay === "7d" ? "active" : ""}`}
                      onClick={() => changeDaysTab("7d")}
                    >
                      7d
                    </strong>
                    <strong
                      className={`tab2 ${activeDay === "30d" ? "active" : ""}`}
                      onClick={() => changeDaysTab("30d")}
                    >
                      30d
                    </strong>
                    <strong
                      className={`tab2 ${activeDay === "all" ? "active" : ""}`}
                      onClick={() => changeDaysTab("all")}
                    >
                      All Time
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th colSpan={2}></th>
                      <th>Unique Collectors</th>
                      <th>NFTs Sold</th>
                      <th className="text-right">Primary Sales</th>
                      <th className="text-right">Secondary Sales</th>
                      <th className="text-right">Total Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.map((profile, key) => (
                      <TableRow key={key} {...profile} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TableRow = (props) => (
  <tr>
    <td>
      <span className="rank">#{props.rank}</span>
    </td>
    <td>
      <img className="profile-image-table" alt="profile" src={props.image} />
    </td>
    <td>
      <div className="d-flex flex-column">
        <span className="name">{props.name}</span>
        <span className="username">{props.username}</span>
      </div>
    </td>
    <td>
      <span className="table-text">{props.uniqueCollectors}</span>
    </td>
    <td>
      <span className="table-text">{props.nftSold}</span>
    </td>
    <td className="text-right">
      <div className="d-flex flex-column">
        <span className="table-text">{props.primarySales.etherium} ETH</span>
        <span className="table-subtext">
          ${props.primarySales.price.toFixed(2)}
        </span>
      </div>
    </td>
    <td className="text-right">
      <div className="d-flex flex-column">
        <span className="table-text">{props.secondarySales.etherium} ETH</span>
        <span className="table-subtext">
          ${props.secondarySales.price.toFixed(2)}
        </span>
      </div>
    </td>
    <td className="text-right">
      <div className="d-flex flex-column">
        <span className="table-text">
          {props.primarySales.etherium + props.secondarySales.etherium} ETH
        </span>
        <span className="table-subtext">
          ${(props.primarySales.price + props.secondarySales.price).toFixed(2)}
        </span>
      </div>
    </td>
  </tr>
);
