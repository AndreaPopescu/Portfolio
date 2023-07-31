import './Projects.css';
import wealthymove from '../../assets/wealthymove.jpg';
function Projects() {
  return (
    <section id='Projects'>
      <h1>Projects</h1>
      <div className='container'>
        <div className='card'>
          <img src={wealthymove} alt=''/>
          <h3>WealthyMove</h3>
          {/* <p>lorem ipsum</p> */}
          <div className='links'>
          {/*<a href='/' className='btn-git'>View Code</a>*/}
          <a href='https://wealthymove.com/' className='btn-live'>Visit Site</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;