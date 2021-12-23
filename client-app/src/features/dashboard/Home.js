import React from "react";

import { Breadcrumb } from "react-bootstrap";

function Home() {
  return (
    <div className="container">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Admission</Breadcrumb.Item>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <h3 className="fw-bold border-bottom">Dashboard</h3>
    </div>
  );
}

export default Home;
