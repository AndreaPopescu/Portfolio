import './Projects.css';
import project1 from '../../assets/img.png';
function Projects() {
  return (
    <section id='Projects'>
      <h1>Projects</h1>
      <div className='container'>
        <div className='card'>
          <img src={project1} alt=''/>
          <h3>Crypto tracking price</h3>
          <p>lorem ipsum</p>
          <div className='links'>
          <a href='/' className='btn-git'>View Code</a>
          <a href='/' className='btn-live'>Live Demo</a>
          </div>
        </div>
        <div className='card'>
          <img src={project1} alt=''/>
          <h3>Title</h3>
          <p>lorem ipsum</p>
          <div className='links'>
          <a href='/' className='btn-git'>View Code</a>
          <a href='/' className='btn-live'>Live Demo</a>
          </div>
        </div>
        <div className='card'>
          <img src={project1} alt=''/>
          <h3>Title</h3>
          <p>lorem ipsum</p>
          <div className='links'>
          <a href='/' className='btn-git'>View Code</a>
          <a href='/' className='btn-live'>Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;