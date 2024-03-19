import HeroImg from '../assets/hero.jpg';
import { FaGithub,FaInstagram} from "react-icons/fa";
import { AiOutlineLinkedin} from "react-icons/ai";


export default function Hero(){
    const config = {
      subtitle: 'Im a Frontend Developer ',
      social: {
        github: 'https://github.com/Dharani-web18',
        instagram:'https://www.instagram.com/dharanivelmurugan18',
        linkedin:'https://www.linkedin.com/in/dharani-v-45656a275'
        
      }
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
      <div className='md:w-1/2 flex flex-col'>
          <h1 className='text-8xl font-hero-font bg-sec'>Hi, <br/> Im <span className= 'text-black'>Dharani</span>
              <p className='text-5xl  text-pink-700'>{config.subtitle}</p>
          </h1>
        
          <div className='flex  text-black py-10'>
            <a href={config.social.github} className='pr-5 hover:text-pink-800'><FaGithub size={70}/></a>
            <a href={config.social.instagram} className='pr-5 hover:text-pink-800'><FaInstagram size={70}/></a>
            <a href={config.social.linkedin} className='pr-5 hover:text-pink-800'><AiOutlineLinkedin size={70}/></a>
          </div>
      </div>
      <img className='md:w-1/2' src={HeroImg} />
    </section>
} 