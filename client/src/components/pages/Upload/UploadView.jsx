import React, { useState } from "react";
import UploadTable from "./components/UploadTable";

const UploadView = ({
  files,
  getRootProps,
  getInputProps,
  removeFile,
  clearFiles,
  onSend,
}) => {
  const [hovered, setHovered] = useState(false);
  const onToggleHover = () => setHovered(!hovered);

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 ">
        <div
          className={`card ${
            hovered ? "border-success text-success" : "border-dark text-muted"
          }`}
          onMouseEnter={onToggleHover}
          onMouseLeave={onToggleHover}
        >
          <div
            {...getRootProps({ className: "dropzone" })}
            className="card-body text-center"
            style={{
              padding: "1.25rem",
              margin: "20px",
              border: "2px dashed #cccccc",
              borderRadius: "5px",
            }}
          >
            <input {...getInputProps()} />
            <h4 className={`mb-3`}>
              Drag and drops your images here, or click to select
            </h4>
            <i className="fas fa-cloud-upload-alt fa-5x"></i>
            <h6 className="mt-3">
              <small>(Only PNG, JPG, JFIF and GIF files are allowed)</small>
            </h6>
          </div>
        </div>
      </div>
      <aside>
        {files?.length > 0 && (
          <UploadTable
            files={files}
            removeFile={removeFile}
            clearFiles={clearFiles}
            onSend={onSend}
          />
        )}
      </aside>
    </div>
  );
};

export default UploadView;
