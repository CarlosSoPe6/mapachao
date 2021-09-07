import React from "react";
import UploadView from "./UploadView";
import useDropFile from "./hooks/useDropFile";
import http from "../../../http-common";

const UploadContainer = () => {
  const {
    files, setFiles, getRootProps, getInputProps,
  } = useDropFile();

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  const upload = (file) => {
    const formData = new FormData();

    formData.append("file", file);

    return http.post("/api", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const onSend = () => {
    files.forEach(async (file) => {
      try {
        await upload(file);
      } catch (error) {
        console.error(error);
      }
    });
  };

  const clearFiles = () => {
    setFiles([]);
  };

  return (
    <UploadView
      files={files}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      removeFile={removeFile}
      clearFiles={clearFiles}
      onSend={onSend}
    />
  );
};

export default UploadContainer;
