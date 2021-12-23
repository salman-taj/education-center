import React from "react";

import { Breadcrumb } from "react-bootstrap";

function Application() {
  return (
    <div className="container">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Admission</Breadcrumb.Item>
        <Breadcrumb.Item active>Applications</Breadcrumb.Item>
      </Breadcrumb>
      <h3 className="fw-bold border-bottom">Applications</h3>
    </div>
  );
}

export default Application;
