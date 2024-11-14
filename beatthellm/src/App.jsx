import React from 'react';
import { uploadData } from 'aws-amplify/storage';

export function App() {
  const [file, setFile] = React.useState();

  const handleChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
        <button
          onClick={() =>
            uploadData({
              path: `media/${file.name}`,
              data: file,
          })
        }
      >
        Upload
      </button>
    </div>
  );
}
export default App;
