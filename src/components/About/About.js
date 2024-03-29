import './About.css';
import {FaHtml5, FaCss3Alt, FaReact, FaGit, FaNode} from 'react-icons/fa'
import {SiJavascript, SiMysql, SiNextdotjs} from 'react-icons/si'
import about from '../../assets/about-img.png';
import skills from '../../assets/skills-img.png';

function About() {
  return (
    <>
    <section id='About'>
        <div className='container-me'>
          <div className='me'>
            <h1>About me</h1>
            <p>I'm a 20 years old Fullstack Web Developer. I have already done some projects alone and you can check it in the projects section, also I have a YouTube channel where I share my knowledge to help the Dev Community.  
            </p>
          </div>
          <img src={about} alt=''/>
        </div>
        <div className='container-skills'>
          <img src={skills} alt=''/>
          <div className='my-skills'>
            <h1>My Skills</h1>
            <div className='skill'>
              <div className='card'>
                <FaHtml5/>
                <p>Html</p>
              </div>
              <div className='card'>
                <FaCss3Alt/>
                <p>Css</p>
              </div>
              <div className='card'>
                <SiJavascript/>
                <p>Javascript</p>
              </div>
              <div className='card'>
                <FaReact/>
                <p>React.js</p>
              </div>
              <div className='card'>
                <SiNextdotjs/>
                <p>Next.js</p>
              </div>
              <div className='card'>
                <FaNode/>
                <p>Node.js</p>
              </div>
              <div className='card'>
                <SiMysql/>
                <p>Mysql</p>
              </div>
              <div className='card'>
                <FaGit/>
                <p>Git</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}

export default About;