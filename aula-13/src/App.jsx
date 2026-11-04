import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <Navbar />
      
      <main>
        <p>
          Esta página é um exemplo simples para aprender HTML e CSS.
          Aqui você encontra informações sobre três raças de cachorros muito populares:
          Pastor Alemão, Golden Retriever e Rottweiler.
        </p>
      </main>

      <Footer />
    </>
  )
}

export default App
