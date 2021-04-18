import React from "react";

const Endpoint = ({ endpoint: { url, description, example } }) => (
  <tr className="d-flex">
    <th className="col-3">{url}</th>
    <td className="col-6">{description}</td>
    <td className="col-3">
      <a
        className="btn btn-success"
        href={url}
        target="_blank"
        role="button"
        rel="noreferrer"
      >
        {example}
      </a>
    </td>
  </tr>
);

export default Endpoint;
