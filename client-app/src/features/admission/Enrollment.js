import React from 'react'
import { Breadcrumb } from "react-bootstrap";

function Enrollment() {
  return (
    <div className="container">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Admission</Breadcrumb.Item>
        <Breadcrumb.Item active>Enrollments</Breadcrumb.Item>
      </Breadcrumb>
      <h3 className="fw-bold border-bottom">Enrollments</h3>
    </div>
  );
}

export default Enrollment
