import './Home.css';

function Home() {
  return (
    <section id='Home'>
      <div className='bg'>
      </div>
      <div className='container-text'>
        <h1>Hi, I'm <span>Andrea</span> a<br/> Frontend Developer</h1>
        <p>If you are looking for a Frontend Developer to build your site you are in the right place.</p>
        <a href='#Projects'>Browse Projects</a> 
      </div>
    </section>
  );
}

export default Home;