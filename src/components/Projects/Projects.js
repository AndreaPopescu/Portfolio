import './Projects.css';
import rockPaperScissor from '../../assets/rock-paper-scissor.jpg';
function Projects() {
  return (
    <section id='Projects'>
      <h1>Projects</h1>
      <div className='container'>
        <div className='card'>
          <img src={rockPaperScissor} alt=''/>
          <h3>WealthyMove</h3>
          {/* <p>lorem ipsum</p> */}
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