import React from "react";
import UploadItem from "./UploadItem";

const UploadTable = ({
  files, removeFile, clearFiles, onSend,
}) => (
  <div>
    <table className="mt-4 table table-striped table-condensed">
      <thead>
        <tr className="table-success">
          <th scope="col" className="col-md-1">
            Image
          </th>
          <th scope="col" className="col-md-6">
            Name
          </th>
          <th scope="col" className="col-md-4">
            Tags
          </th>
          <th scope="col" className="col-md-1">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {files.map((file) => (
          <UploadItem
            key={file.name}
            file={file}
            removeFile={removeFile}
            sendTags={(tags) => (file.tags = tags)}
          />
        ))}
      </tbody>
    </table>
    <div className="d-flex justify-content-end">
      <button type="button" className="btn btn-success mx-2" onClick={onSend}>
        Send
      </button>
      <button
        type="button"
        className="btn btn-light"
        onClick={clearFiles}
      >
        Clear
      </button>
    </div>
  </div>
);

export default UploadTable;
