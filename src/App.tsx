import './App.scss'
import Logo from './assets/images/logo.svg'

function App() {
  return (
    <main>
      <header className='header-container'>
         <div className='logo-container'>    
           <img src={Logo} alt="bora" />
            <div className='logo-text'>
              <span className='logo-text-bold'>conteudo</span>
              <span className='logo-text-regular'>conteudo de baixo</span>
              </div>
            </div>
      </header>
    </main>
  )
}

export default App
