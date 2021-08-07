import { useState, useRef, useEffect } from 'react';
import './App.css';
import * as photosAPI from '../../utilities/photos-api';
import PhotoCard from '../../components/PhotoCard/PhotoCard';

export default function App() {
  const [title, setTitle] = useState('');
  const [photos, setPhotos] = useState([]);
  // Use a ref prop on the <input> in the JSX to
  // create a reference to the <input>, i.e.,
  // inputRef.current will be the <input> DOM element
  const fileInputRef = useRef();

  // Fetch existing uploaded photos after first render
  // Photos will be sorted in the controller with the most recent first
  useEffect(function() {
    photosAPI.getAll().then(photos => setPhotos(photos));
  }, []);

  /*--- Event Handlers ---*/

  async function handleUpload() {
    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await photosAPI.upload(formData);
    setPhotos([newPhoto, ...photos]);
    // Clear the description and file inputs
    setTitle('');
    fileInputRef.current.value = '';
  }

  return (
    <main className="App flex-ctr-ctr">
      <section className="flex-ctr-ctr">
        <input type="file" ref={fileInputRef} />
        <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Photo Title" />
        <button onClick={handleUpload}>Upload Photo</button>
      </section>
      <section>
        {photos.map(p => <PhotoCard photo={p} key={p._id} />)}
      </section>
    </main>
  );
}