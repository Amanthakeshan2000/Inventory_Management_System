import React from 'react';


export default function RequestPage() {
  return (
    <div className="container">
    <nav className="breadcrumb">
      <span>Request </span>  / <span className="active">Create Request</span>
    </nav>
    <div className="buttons">
      <button className="request-form-btn">Request Form</button>
      <span className="request-confirmation">Request confirmation</span>
    </div>
  </div>
  )
}
