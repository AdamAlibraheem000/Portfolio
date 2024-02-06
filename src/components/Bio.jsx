import HeroImg from '../assets/imgs/codeBG.jpg'
import './BioStyling.css'

const Bio = () => {
  return (
    <div >
      <div className="mask">
        <img className="intro-img" src={HeroImg} alt='bmg-img'>

        </img>
      </div>
    </div>
  )
}

export default Bio