import React from "react";
import EndpointsList from "../layout/EndpointsList";

const Home = () => (
  <div className="container mt-5">
    <div className="jumbotron">
      <h1 className="display-4">Mapachao</h1>
      <p className="lead">Mapaches as a service</p>
      <p>Is a REST API where you can get all the cuteness from a raccoon.</p>
      <p className="lead mt-5">
        <a
          className="btn btn-primary btn-lg"
          href="/mapache"
          target="_blank"
          role="button"
        >
          Get a Mapache
        </a>
      </p>
    </div>
    <EndpointsList />
  </div>
);

export default Home;
