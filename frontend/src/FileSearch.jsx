import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileSearch = () => {
  const [fileName, setFileName] = useState('');
  const [files, setFiles] = useState([]);
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
    <div>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileSearch;