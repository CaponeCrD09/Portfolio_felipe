import './App.css'
import img_felipe from './assets/img/felipe.webp' //sempre que for pegar algo que esta em outro documento tem que importar antes

function App() {

  return (
    <>
      <div className='port_header'>
        <div className='port_header_nome'>
          <h1>Felipe Souza</h1>
          <h2>Desenvolvedor full stack</h2>
        </div>

        <div className='port_header_img'>
          <img src={img_felipe} alt="Foto de perfil de Felipe Souza" />
        </div>
      </div>

      <div className='port_mid'>
        <div className='port_mid_esq'>
          <img src={img_felipe} alt="Foto de perfil de Felipe Souza" />
        </div>
        <div className='port_mid_dir'>
          <h1>"ola mundo"</h1>
          
        </div>
      </div>
    </>
  )
}

export default App
