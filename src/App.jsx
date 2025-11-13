import './App.css'
import ContactComponent from './components/ContactComponent'
import ContactList from './components/ContactList'
import RelationshipList from './components/RelationshipList'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import RelationshipComponent from './components/RelationshipComponent'
import FinancialAccountList from './components/FinancialAccountList'
import FinancialAccountComponent from './components/FinancialAccountComponent'
import DashboardComponent from './components/DashboardComponent'
import Login from './components/Login'


function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          
          {/* http://localhost:3000/dashboard */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* http://localhost:3000/dashboard */}
          <Route path='/dashboard' element= { <DashboardComponent /> }></Route>

          {/* Contacts */}
          {/* http://localhost:3000/api/contacts */}
          <Route path='/contacts' element= { <ContactList /> }></Route>
          {/* http://localhost:3000/add-contact */}
          <Route path='/add-contact' element= { <ContactComponent /> }></Route>
          {/* http://localhost:3000/edit-contact/1 */}
          <Route path='/edit-contact/:id' element = { <ContactComponent />}></Route>


          {/* Relationships */}
          {/* http://localhost:3000/relationships */}
          <Route path='/relationships' element={ <RelationshipList /> }></Route>
          {/* http://localhost:3000/add-relationship */}
          <Route path='/add-relationship' element= { <RelationshipComponent /> }></Route>
          {/* http://localhost:3000/edit-relationship/1 */}
          <Route path='/edit-relationship/:id' element = { <RelationshipComponent />}></Route>

          {/* Financial Account */}
          {/* http://localhost:3000/financial-accounts */}
          <Route path='/financial-accounts' element={ <FinancialAccountList /> }></Route>
          {/* http://localhost:3000/add-financial-account */}
          <Route path='/add-financial-account' element= { <FinancialAccountComponent /> }></Route>
          {/* http://localhost:3000/edit-financial-account/1 */}
          <Route path='/edit-financial-account/:id' element = { <FinancialAccountComponent />}></Route>

          {/* LOGIN */}
          <Route path='/login' element={ <Login /> }></Route>

        </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
