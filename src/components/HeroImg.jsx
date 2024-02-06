import './HeroImgStyles.css'
import IntroImg from '../assets/imgs/codeBG.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='intro-img'></img>
        </div>
        <div className='content'>
            <p>Adam Al-ibraheem</p>
            <h1>Full-Stack Developer</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/about" className='btn'>About</Link>
                
            </div>
        </div>

    </div>
  )
}

export default HeroImg