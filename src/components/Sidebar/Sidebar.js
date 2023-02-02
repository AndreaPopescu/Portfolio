import './Sidebar.css';
function Sidebar({open,toggle}) {
  return (
    <>
    <div id='sidebar' style={open ? {opacity:"1", top:"0"} : {opacity:"0", top:"-100%"}}>
        <ul className='sidebarMenu'>
          <li><a href='#Home'onClick={toggle}>Home</a></li>
          <li><a href='#About'onClick={toggle}>About</a></li>
          <li><a href='#Projects'onClick={toggle}>Projects</a></li>
        </ul>
        <a className='sidebarBtn' href='#Contact'onClick={toggle}>Contact Me</a>
    </div>
    </>
  );
}

export default Sidebar;