import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {

  let mainText = [
    {text1: "Indulge in sweetness,", text2: "one bite at a time!"},
    {text1: "Handcrafted treats", text2: "made with love and care."},
    {text1: "A world of flavors", text2: "to satisfy your cravings."},
    {text1: "Bringing joy,", text2: "one sweet moment at a time."},
    {text1: "Deliciously irresistible,", text2: "just for you!"},
    {text1: "Life’s too short...", text2: "treat yourself today!"},
  ]

  const [currentSlide, setCurrentSlide] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    let interval;
    if (!playVideo) {
      interval = setInterval(() => {
        setCurrentSlide((slide) => (slide === 5 ? 0 : slide + 1));
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [playVideo]);



  return (
    <div className="app">
      <Background currentSlide={currentSlide} playVideo={playVideo}/>
      <Navbar />
      <Main
        setPlayVideo={setPlayVideo}
        mainText={mainText[currentSlide]}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        playVideo={playVideo}
      />
    </div>
  )
}

export default App
