import React, { useState } from 'react';
import axios from 'axios';

const FileDeleter = () => {
  const [fileName, setFileName] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [canNotDelete, setCanNotDelete] = useState(false);


  const handleDelete = () => {
    setDeleting(true);
    axios.delete(`http://localhost:8080/files/delete/${fileName}`)  //change localhost to ipv4
     .then((response) => {
        setDeleting(false);
      })
     .catch((error) => {
        setCanNotDelete(true);
        console.error(error);
        setDeleting(false);
      });
  };

  return (
    <div className= "text-center custom-class">
      <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} />
      <button onClick={handleDelete}>Delete</button>
      {deleting ? (
        <p>Deleting...</p>
      ) : canNotDelete ? (
        <p>File do not exist</p>
      ) : (
        <p> {fileName} has been deleted</p>
      )}
    </div>
  );
};

export default FileDeleter;
