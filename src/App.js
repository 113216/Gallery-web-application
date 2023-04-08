import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Model from './components/Model';
import { useState } from 'react';

function App() {

  const [selectedImg, setSelectedImg] = useState(null)
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
