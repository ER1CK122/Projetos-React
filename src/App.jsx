import './assets/css/main.css';
import Nav from './components/template/nav';
import Footer from './components/template/footer';

function Main() {
  return (
    <>
    <main className='vh-100'>
      <Nav/>
      <div className='container h-100 d-flex'>
        <div className='box-card'>
          <img src="./assets/images/logo-god.png" alt="" />
          <div></div>
        </div>
      </div>
    </main>

    <Footer/>
    </>
  );
}

export default Main;
