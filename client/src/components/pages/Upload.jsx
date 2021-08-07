import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const Upload = () => {
  const [files, setFiles] = useState([]);

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/gif, image/jfif",
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        acceptedFiles.map((file) => {
          Object.assign(file, { preview: URL.createObjectURL(file) });
          return (
            <li key={file.path}>
              <img
                src={file.preview}
                style={{
                  display: "block",
                  width: "100px",
                  height: "auto",
                }}
              />
              {file.name} - {(file.size / 1024).toFixed(2) + " KB"}
            </li>
          );
        }),
      ]);
    },
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files],
  );

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 ">
        <div
          className={`card ${
            hovered ? "border-success text-success" : "border-dark text-muted"
          }`}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
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
        {files.length > 0 ? <h4>Files</h4> : <></>}
        <ul>{files}</ul>
      </aside>
    </div>
  );
};

export default Upload;
