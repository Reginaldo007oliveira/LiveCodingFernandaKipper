import { ArrowUpRight } from 'phosphor-react'
import './App.scss'
import { Logo } from './components/Logo'

function App() {
  return (
    <main>
      <header className='header-container'>
         <Logo />
         <nav className='menu-options'>
          <a href="">Texto 1</a>
          <a href="">Texto 2</a>
          <a href="">Texto 3</a>
         </nav>

         <button>
          Contact us
          <ArrowUpRight size={25} weight="bold" />
          </button>
      </header>
    </main>
  )
}

export default App
