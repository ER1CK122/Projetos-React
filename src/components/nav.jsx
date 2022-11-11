import logo from '../logo.svg';

function Nav(){
  return(
    <nav className='d-flex w-100 nav'>
      <div className='logo-wraper'>
        <a href="https://pt-br.reactjs.org/" className='h-100 w-100' target={'_blank'}><img src={logo} alt="logo" /></a>
      </div>
      <ul className="d-flex nav-menu">
        <a href=""><li className="">Sobre mim</li></a>
        <a href="" className="ms-2"><li>Projetos</li></a>
        <a href="" className="ms-2"><button><li>Contato</li></button></a>
      </ul>
    </nav>
  )
}

export default Nav;