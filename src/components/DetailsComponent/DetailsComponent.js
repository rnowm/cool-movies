import React from "react";
import { Link } from "react-router-dom";

export const DetailsComponent = () => (
  <div>
    <Link to="/" className="btn btn-primary">
      Back
    </Link>
    <br />
    <h1>Example Component</h1>
  </div>
);
