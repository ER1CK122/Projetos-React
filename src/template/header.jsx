import logo from '../assets/images/logo.svg';
import NavMenu from '../components/nav';

function Header(){
  return(
    <nav className='d-flex w-100 nav'>
      <div className='logo-wraper'>
        <a href="https://pt-br.reactjs.org/" className='h-100 w-100' target={'_blank'} rel="noreferrer"><img src={logo} alt="logo" /></a>
      </div>
      <NavMenu/>
    </nav>
  )
}

export default Header;