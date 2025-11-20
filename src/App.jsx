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
import { AuthProvider } from './components/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'


function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <HeaderComponent />
        <div className='content'>
          <Routes>
            
            {/* http://localhost:3000/dashboard */}
            <Route path="/" element={<Navigate to="/login" />} />

            {/* http://localhost:3000/dashboard */}
            <Route path='/dashboard' element= { <ProtectedRoute><DashboardComponent /></ProtectedRoute>}></Route>

            {/* Contacts */}
            {/* http://localhost:3000/api/contacts */}
            <Route path='/contacts' element= { <ProtectedRoute><ContactList /></ProtectedRoute>}></Route>
            {/* http://localhost:3000/add-contact */}
            <Route path='/add-contact' element= { <ProtectedRoute><ContactComponent /></ProtectedRoute> }></Route>
            {/* http://localhost:3000/edit-contact/1 */}
            <Route path='/edit-contact/:id' element = { <ProtectedRoute><ContactComponent /></ProtectedRoute>}></Route>


            {/* Relationships */}
            {/* http://localhost:3000/relationships */}
            <Route path='/relationships' element={ <ProtectedRoute><RelationshipList /></ProtectedRoute> }></Route>
            {/* http://localhost:3000/add-relationship */}
            <Route path='/add-relationship' element= { <ProtectedRoute><RelationshipComponent /></ProtectedRoute> }></Route>
            {/* http://localhost:3000/edit-relationship/1 */}
            <Route path='/edit-relationship/:id' element = { <ProtectedRoute><RelationshipComponent /></ProtectedRoute>}></Route>

            {/* Financial Account */}
            {/* http://localhost:3000/financial-accounts */}
            <Route path='/financial-accounts' element={ <ProtectedRoute><FinancialAccountList /></ProtectedRoute> }></Route>
            {/* http://localhost:3000/add-financial-account */}
            <Route path='/add-financial-account' element= { <ProtectedRoute><FinancialAccountComponent /></ProtectedRoute> }></Route>
            {/* http://localhost:3000/edit-financial-account/1 */}
            <Route path='/edit-financial-account/:id' element = { <ProtectedRoute><FinancialAccountComponent /></ProtectedRoute>}></Route>

            {/* LOGIN */}
            <Route path='/login' element={ <Login /> }></Route>

          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
