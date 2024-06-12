import React from 'react';
import FileUploader from './FileUploader';
import FileSearch from './FileSearch';
import FileDeleter from './FileDeleter';

function App() {
  return(
    <div>
      <h1>File Manager</h1>
      <FileUploader />
      <FileSearch />
      <FileDeleter />
    </div>
  );
}

export default App
