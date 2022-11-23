function NavMenu(){
  return(
    <ul className="d-flex nav-menu">
      <a href="#sobre-mim"><li>Sobre mim</li></a>
      <a href="#projetos" className="ms-2"><li>Projetos</li></a>
      <a href="#contato" className="ms-2"><button><li>Contato</li></button></a>
    </ul>
  )
}

export default NavMenu;