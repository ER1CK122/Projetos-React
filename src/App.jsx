import './App.css';
import './reset.css';
import './base.css';
import Nav from './components/nav';

function Main(props) {
  return (
    <>
    <main className='vh-100'>
      <Nav/>
    <div className='center h-75'>
      <h1 className='fs-5'>Seu nome: {props.pessoa.name}</h1>
    </div>      
    </main></>
  );
}

export default Main;
