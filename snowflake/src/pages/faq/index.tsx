import React from "react";
import Collapsible from "components/Collapsible";

export default function Faq() {
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage: "url(../assets/img/sections/gerrit-vermeulen.jpg)",
        }}
      >
        <div className="filter filter-danger"></div>
        <div className="content-center">
          <div className="container">
            <h1>Frequently Asked Questions</h1>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="section">
          <div className="container">
            <h4 className="text-center mb-3">Frequently Asked Questions</h4>{" "}
            <br />
            <Collapsible />
          </div>
        </div>
      </div>
    </>
  );
}
