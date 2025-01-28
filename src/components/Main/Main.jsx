import './main.css'
import arrow from '../../assets/arrow_btn.png'
import pause from '../../assets/pause_icon.png'
import play from '../../assets/play_icon.png'

const Main = ({currentSlide, setCurrentSlide, playVideo, setPlayVideo, mainText}) => {

  const videoText = () => {
    if (playVideo) {
      return 'Pause Video';
    } else {
      return 'Play Video';
    }
  };

  return (
    <div className='main'>
      <div className="main-headings">
        <p>{mainText.text1}</p>
        <p>{mainText.text2}</p>
      </div>
      <div className="main-seeMore">
        <p>Click to view our products!</p>
        <img src={arrow} alt="/" />
      </div>
      <div className="main-dots-play">
        <ul className='main-dots'>
          <li onClick={() => setCurrentSlide(0)} className={currentSlide===0?'main-dot active': 'main-dot'}></li>
          <li onClick={() => setCurrentSlide(1)} className={currentSlide===1?'main-dot active': 'main-dot'}></li>
          <li onClick={() => setCurrentSlide(2)} className={currentSlide===2?'main-dot active': 'main-dot'}></li>
          <li onClick={() => setCurrentSlide(3)} className={currentSlide===3?'main-dot active': 'main-dot'}></li>
          <li onClick={() => setCurrentSlide(4)} className={currentSlide===4?'main-dot active': 'main-dot'}></li>
          <li onClick={() => setCurrentSlide(5)} className={currentSlide===5?'main-dot active': 'main-dot'}></li>
        </ul>
      <div className="playStatus">
        <img onClick={()=> setPlayVideo(!playVideo)} src={playVideo?pause:play} alt="" />
        <p>{videoText()}</p>
      </div>
      </div>
    </div>
  )
}

export default Main
