import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Model from './components/Model';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
function App() {

  const [selectedImg, setSelectedImg] = useState(null)
  const [sortvalue, setSortValue] = useState(true)
  return (
    <div className="App">

      <Title />
      <span className='btn btn-primary me-3' onClick={() => {
        setSortValue(prev => {
          if (prev) {
            return false

          }
          return true
        })
      }}>{sortvalue ? <i class="fa-solid fa-arrow-down-a-z me-2"></i> : <i class="fa-solid fa-arrow-up-z-a me-2"></i>}Sort</span>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} sortvalue={sortvalue} />
      {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
