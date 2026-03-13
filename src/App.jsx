import './styles/App.css'
import ContactComponent from './components/contacts/ContactComponent'
import ContactList from './components/contacts/ContactList'
import RelationshipList from './components/relationships/RelationshipList'
import FooterComponent from './components/common/FooterComponent'
import HeaderComponent from './components/common/HeaderComponent'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import RelationshipComponent from './components/relationships/RelationshipComponent'
import FinancialAccountList from './components/financialAccounts/FinancialAccountList'
import FinancialAccountComponent from './components/financialAccounts/FinancialAccountComponent'
import DashboardComponent from './components/dashboard/DashboardComponent'
import Login from './components/auth/login/Login'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/common/ProtectedRoute'
import RegisterUser from './components/auth/register/RegisterUser'
import AdminUsers from './components/admin/AdminUsers'
import AdminRoute from './components/common/AdminRoute'


function App() {

  return (
    <>
    <div className='app-container'>
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

              {/* Register User */}
              <Route path='/register-user' element={ <RegisterUser />}></Route>

              <Route path='/admin/users' element={ <AdminRoute><AdminUsers /></AdminRoute>}/>

            </Routes>
          </div>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
    </>
  )
}

export default App
