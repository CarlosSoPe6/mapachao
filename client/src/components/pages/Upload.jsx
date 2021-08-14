import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadItem from "../layout/UploadItem";

const Upload = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/gif, image/jfif",
    onDrop: (acceptedFiles) => {
      setFiles(
        [
          ...files,
          acceptedFiles.map((file) => {
            Object.assign(file, { preview: URL.createObjectURL(file) });
            return file;
          }),
        ].flat(),
      );
    },
  });

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  const onSend = () => {
    // Do stuff to send to API
    console.log(files);
  };

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
        {files?.length > 0 ? (
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
                {files.map((file, index) => (
                  <UploadItem key={index} file={file} remove={removeFile} />
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-success mx-2"
                onClick={onSend}
              >
                Send
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setFiles([])}
              >
                Clear
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </aside>
    </div>
  );
};

export default Upload;
