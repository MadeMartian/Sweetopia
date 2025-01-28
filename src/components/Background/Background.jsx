import './background.css'
import Video from '../../assets/candy-bg.mp4'
import image1 from '../../assets/pexels-foodie-factor-162291-557665.jpg'
import image2 from '../../assets/pexels-gabby-k-5874585.jpg'
import image3 from '../../assets/pexels-isabella-clifford-1072712-2064126.jpg'
import image4 from '../../assets/pexels-polina-tankilevitch-5469042.jpg'
import image5 from '../../assets/pexels-tara-winstead-7123110.jpg'
import image6 from '../../assets/pexels-tima-miroshnichenko-7033650.jpg'

const Background = ({playVideo, currentSlide}) => {

  if(playVideo){
    return (
      <video className='background-media' autoPlay loop muted type='video/mp4'>
        <source src={Video}/>
      </video>
    )
  }
  else if (currentSlide===0) {
    return(<img src={image1} alt="" className='background-media' />)
  }
  else if (currentSlide===1) {
    return(<img src={image2} alt="" className='background-media' />)
  }
  else if (currentSlide===2) {
    return(<img src={image3} alt="" className='background-media'/>)
  }
  else if (currentSlide===3) {
    return(<img src={image4} alt="" className='background-media'/>)
  }
  else if (currentSlide===4) {
    return(<img src={image5} alt="" className='background-media'/>)
  }
  else if (currentSlide===5) {
    return(<img src={image6} alt="" className='background-media'/>)
  }

}

export default Background
