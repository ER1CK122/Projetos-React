import NavMenu from "../components/nav";

function Footer(){
  return(
    <footer className="d-flex align-items-center p-3 vh-20 bg-primary-light">
      <div>Site desenvolvido por ErickN</div>
      <NavMenu/>
    </footer>
  )
}

export default Footer;