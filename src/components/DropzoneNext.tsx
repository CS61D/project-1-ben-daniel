import { useDropzone } from "react-dropzone";
import { useState } from "react";

export const Dropzone = () => {
  const [files, setFiles] = useState<File[]>([]); // State to store dropped files

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": []  // Accept all image types
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]); // Add new files to the current list
      console.log("Files dropped:", acceptedFiles);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Dropzone Area */}
      <div className="flex items-center justify-center h-64 w-64 rounded-lg border-2 border-gray-300 border-dashed p-2">
        <div {...getRootProps()} className="text-center">
          <input {...getInputProps()} />
          <p>Click to select files or drag and drop here!</p>
        </div>
      </div>

      {/* Display Dropped Files in Flexboxes */}
      <div className="mt-4 flex flex-col justify-center gap-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-80 h-15 bg-white border border-gray-300 rounded-lg p-2"
          >
            <div className="text-center">
              <p className="text-gray-800 truncate">{file.name}</p>
              <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

