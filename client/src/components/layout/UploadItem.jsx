import React, { useState, useEffect } from "react";

const UploadItem = ({ file, remove, sendTags }) => {
  const [currentTag, setCurrentTag] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    sendTags(tags);
  }, [tags]);

  const addTag = (e) => {
    e.preventDefault();
    const trimmedTag = currentTag.trim();
    if (trimmedTag.length > 0) {
      if (tags.findIndex((tag) => tag === trimmedTag) >= 0) {
        setCurrentTag("");
        return;
      }
      setTags([...tags, trimmedTag]);
    }
    setCurrentTag("");
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
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
          <form onSubmit={addTag}>
            <div className="input-group mb-1">
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
          <div>
            {tags?.map((tag) => (
              <button
                key={tag}
                className="btn btn-info btn-sm me-1 mt-1"
                title="Remove tag"
                onClick={() => removeTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
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
