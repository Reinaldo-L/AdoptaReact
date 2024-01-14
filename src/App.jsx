import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MyCard from './components/MyCard'


function App() {
  return (
    <>
      <Header day="Lunes"/>
      <div className='cards'>
      <MyCard
      img="https://assets-global.website-files.com/64663adf80cae0f23099bf1f/6513180c32db340f6ec040e7_IMG_9863%20copy-p-2000.jpg"
      title = "Ovejero"
      description = "Fue encontrado vagando por las calles de Vitacura. Es de tamaño mediano. Tiene 3 años"
      btn = "Adoptame"
      Tags
      />
      <MyCard
      img="https://assets-global.website-files.com/64663adf80cae0f23099bf1f/64e26156ae1b97e77af557f4_IMG_9103%20copy-p-2000.jpg"
      title = "Negrita"
      description = "De nuestras negritas más queridas. 1 año aprox"
      btn = "Llevame"
      />
      <MyCard
      img="https://assets-global.website-files.com/64663adf80cae0f23099bf1f/6526cace99ca6b82a82165a4_IMG_0295%20copy.JPG"
      title = "Jerry"
      description = "Un grandote simpático con algún ancestro de galgo"
      btn = "Incorporar"
      />
      <MyCard
      img="https://assets-global.website-files.com/64663adf80cae0f23099bf1f/64e261de721ca6245decf642_IMG_8745%20copy-p-2000.jpg"
      title = "Conchita"
      description = "Una mamá natural. Conchita ha ayudado a cuidar y educar a cachorros abandonados. 3 años"
      btn = "Adorar"
      />
      </div>
<Footer day="martes"/>
    </>
  )
}

export default App
