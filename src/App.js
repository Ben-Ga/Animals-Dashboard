import "./App.css";
import { Card } from "./components/Card";
import {useEffect, useState} from 'react'
import axios from 'axios'


function App() {
  const [catImage, setImage] = useState(null);
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCat()
    fetchDog()

  }, [])


  const fetchCat = () => {
    axios.get('http://aws.random.cat/meow')
    .then(res => {
      const cat = res.data;
      setImage(cat)
      setLoading(false);
    })    
  }

  const fetchDog = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      const dogData = res.data;
      setDogImage(dogData)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Animals Dashboard</h1>
        <p id="signature">Ben Gallagher</p>
      </header>
      <main>
        <div className="card-container">
          {loading ? <p>loading</p>: <Card img={catImage.file} alt="a cat" cardTitle="Cattos" fetchAnimal={fetchCat} animalType="Cats"/>}
          {loading ? <p>loading</p>: <Card img={dogImage.message} alt="a dog" cardTitle="Dogs" fetchAnimal={fetchDog} animalType="Dogs"/>}
        </div>
      </main>
    </div>
  );
}



export default App;
