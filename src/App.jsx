import './App.css'
import ContactComponent from './components/ContactComponent'
import ContactList from './components/ContactList'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          {/* http://localhost:3000/ */}
          <Route path='/' element= { <ContactList /> }></Route>
          {/* http://localhost:3000/contacts */}
          <Route path='/contacts' element= { <ContactList /> }></Route>

          {/* http://localhost:3000/add-contact */}
          <Route path='/add-contact' element= { <ContactComponent /> }></Route>

          {/* http://localhost:3000/edit-contact/1 */}
          <Route path='/edit-contact/:id' element = { <ContactComponent />}></Route>

        </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
