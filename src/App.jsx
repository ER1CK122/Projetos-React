import './assets/css/main.css';
import LogoGod from './assets/images/logoGod.png'
import LogoAgencia from './assets/images/logoagência.png'
import Nav from './components/template/nav';
import Footer from './components/template/footer';

function Main() {
  return (
    <>
      <main className='vh-100'>
        <Nav/>

        <div className='container d-flex'>
          <div className='box-card'>
            <div className='logo-wraper'><a href="https://www.playstation.com/pt-br/god-of-war/" target={'_blank'} rel='noreferrer'><img src={LogoGod} alt="" /></a></div>
            <div className='text-card'>Site de teste em progresso com tema sobre o jogo God of War Ragnarök, desenvolvido por eu mesmo, usando php, hmtl, css e jquery</div>
          </div>
          <div className='box-card'>
            <div className='logo-wraper'><a href="https://xd.adobe.com/view/d9f79e73-0240-4ade-867e-7e07b8bf994a-8ca4/specs/" target={'_blank'} rel='noreferrer'><img src={LogoAgencia} alt="" /></a></div>
            <div className='text-card'>Site de teste completo com tema feito pela danki code, mas desenvolvido por eu mesmo, usando epenas html, css e javaScript puro</div>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  );
}

export default Main;
