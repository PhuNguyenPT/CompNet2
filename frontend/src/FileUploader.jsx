import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);

    axios.post('http://localhost:8080/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
     .then((response) => {
        setUploaded(true);
        setUploading(false);
      })
     .catch((error) => {
        console.error(error);
        setUploading(false);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
      {uploading? <p>Uploading...</p> : null}
      {uploaded? <p>File uploaded successfully!</p> : null}
    </div>
  );
};

export default FileUploader;