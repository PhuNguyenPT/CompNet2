import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileSearch = () => {
  const [fileName, setFileName] = useState('');
  const [files, setFiles] = useState([]);
  //const [pictures, setPictures] = useState([]);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    setSearching(true);
    setNotFound(false);

    axios.get(`http://localhost:8080/files/search/${fileName}`)
     .then((response) => {
        if (response.data.length === 0) {
          setNotFound(true);
          console.log("No");
        } else {
          setFiles(response.data);
        }
        setSearching(false);
      })
     .catch((error) => {
        setNotFound(true);
        console.error(error);
        setSearching(false);
      });
  };

  return (
    <div className= "text-center custom-class">
      <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {searching ? (
        <p>Searching...</p>
      ) : notFound ? (
        <p>File not found</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              <p>{file.name}</p>
              {file.fileType.startsWith('image/') ? (
                <img
                    src={`data:${file.fileType};base64,${file.fileByte}`}
                    alt={file.name}
                    //style={{ maxWidth: 300, maxHeight: 300 }}
                    onLoad={(event) => {
                        const img = event.target;
                        const maxWidth = 500; // desired maximum width
                        const maxHeight = 500; // desired maximum height
                        const width = img.width;
                        const height = img.height;
                        let newWidth, newHeight;

                        if (width > height) {
                          newWidth = maxWidth;
                          newHeight = (height / width) * maxWidth;
                        } else {
                          newHeight = maxHeight;
                          newWidth = (width / height) * maxHeight;
                        }

                        img.style.width = `${newWidth}px`;
                        img.style.height = `${newHeight}px`;
                    }}
                    style={{ marginBottom: 10 }}
                />
              ) : (
                <p>Not an image</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileSearch;