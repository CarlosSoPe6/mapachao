import { useState } from "react";
import { useDropzone } from "react-dropzone";

const useDropFile = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/gif, image/jfif",
    onDrop: (acceptedFiles) => {
      setFiles(
        [
          ...files,
          ...acceptedFiles.reduce((acc, file) => {
            if (files.findIndex((temp) => temp.name === file.name) >= 0) return [...acc];
            Object.assign(file, { preview: URL.createObjectURL(file) });
            return [...acc, file];
          }, []),
        ],
      );
    },
  });

  return {
    files, setFiles, getRootProps, getInputProps,
  };
};

export default useDropFile;
