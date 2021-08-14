import React, { useState } from "react";

const UploadItem = ({ file, remove }) => {
  const [currentTag, setCurrentTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTag.length > 0) {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  return (
    <tr>
      <th>
        <img
          src={file.preview}
          style={{
            display: "block",
            width: "100px",
            height: "auto",
          }}
        />
      </th>
      <td>
        <strong>{file.name}</strong>
      </td>
      <td>
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                className="form-control form-control-sm"
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
              />
              <button type="submit" className="btn btn-small btn-info">
                Add
              </button>
            </div>
          </form>
          {/* Replace this with fancier format and ability to remove/delete tags */}
          <div>{tags?.join(", ")}</div>
        </div>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => remove(file.name)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default UploadItem;
