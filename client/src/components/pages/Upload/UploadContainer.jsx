import React, { useState } from "react";
import UploadView from "./UploadView";
import useDropFile from "./hooks/useDropFile";

const UploadContainer = () => {
  const { files, setFiles, getRootProps, getInputProps } = useDropFile();

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  const onSend = () => {
    // Do stuff to send to API
    console.log(files);
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
