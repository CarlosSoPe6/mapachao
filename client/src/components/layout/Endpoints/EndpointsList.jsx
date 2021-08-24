import React from "react";

import Endpoint from "./Endpoint";

import endpoints from "./endpoints";

const EndpointsList = () => (
  <table className="table table-striped">
    <thead>
      <tr className="d-flex">
        <th className="col-3" scope="col">Url</th>
        <th className="col-6" scope="col">Description</th>
        <th className="col-3" scope="col">Example</th>
      </tr>
    </thead>
    <tbody>
      {endpoints.map((endpoint) => (
        <Endpoint key={endpoint.id} {...endpoint} />
      ))}
    </tbody>
  </table>
);

export default EndpointsList;
