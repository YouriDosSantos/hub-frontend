import React, { useEffect, useState } from 'react'
import { createFinancialAccount, getFinancialAccount, updateFinancialAccount } from '../services/FinancialAccountService'
import { useNavigate, useParams } from 'react-router-dom'

const FinancialAccountComponent = () => {

  const [accountName, setAccountName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [accountType, setAccountType] = useState('')
  const [balance, setBalance] = useState('')
  const [relationshipId, setRelationshipId] = useState('')


  const {id} = useParams();

  //Validation
  const [errors, setErrors] = useState({
    accountName: '',
    accountNumber: '',
    accountType: '',
    balance: '',
    relationshipId: ''
  })

  const navigator = useNavigate();

  useEffect(() => {

    if(id) {
      getFinancialAccount(id).then((response) => {
        setAccountName(response.data.accountName);
        setAccountNumber(response.data.accountNumber);
        setAccountType(response.data.accountType);
        setBalance(response.data.balance);
        setRelationshipId(response.data.relationshipId);
      }).catch(error => {
        console.error(error);
      })
    }
  }, [id])

  // the handle functions below could be improved with an arrow function instead and then the call in the html form in the return would be changed accordingly also

  function handleAccountName(e){
    setAccountName(e.target.value);
  }

  function handleAccountNumber(e){
    setAccountNumber(e.target.value);
  }

  function handleAccountType(e){
    setAccountType(e.target.value);
  }

  function handleBalance(e){
    setBalance(e.target.value);
  }

  function handleRelationshipId(e){
    setRelationshipId(e.target.value);
  }

  function saveOrUpdateFinancialAccount(e){
    e.preventDefault();

    if(validateForm()){
      const financialAccount = {accountName, accountNumber, accountType, balance, relationshipId};
      console.log(financialAccount);

      if(id){
        updateFinancialAccount(id, financialAccount).then((response) => {
          console.log(response.data);
          navigator('/financial-accounts')
        }).catch(error => {
          console.log(error);
        })
      } else {
        // refer to FinancialAccountService for API method
        createFinancialAccount(financialAccount).then((response) => {
          console.log(response.data);
          navigator('/financial-accounts')
      }).catch(error => {
          console.log(error);
      })
      }
    }
  }

  //check form data
  function validateForm() {
    let valid = true;

    const errorsCopy = {... errors}

    //if firstName not null, show blank error, if Null show error
    if(accountName.trim()){
      errorsCopy.accountName = '';
    } else {
      errorsCopy.accountName = 'Account Name is Required!';
      valid = false;
    }

    if(accountNumber.trim()){
      errorsCopy.accountNumber = '';
    } else {
      errorsCopy.accountNumber = 'Account Number is Required!';
      valid = false;
    }

    if(accountType.trim()){
      errorsCopy.accountType = '';
    } else {
      errorsCopy.accountType = 'Account Type is Required!';
      valid = false;
    }

    if(String(relationshipId).trim()){
      errorsCopy.relationshipId = '';
    } else {
      errorsCopy.relationshipId = 'Relationship ID is Required!';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Update Financial Account</h2>
    } else {
      return <h2 className='text-center'>Add Financial Account</h2>
    }
  }

  return (
    <div className='container '>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {/* <h2 className='text-center'>Add Contact</h2> */}
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Account Name:</label>
                <input 
                  type='text'
                  placeholder='Enter Account Name'
                  name='accountName'
                  value={accountName}
                  className={`form-control ${ errors.accountName ? 'is-invalid': '' }`}
                  onChange={handleAccountName}
                >
                </input>
                { errors.accountName && <div className='invalid-feedback'> { errors.accountName } </div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Account Number:</label>
                <input 
                  type='text'
                  placeholder='Enter Account Number'
                  name='accountNumber'
                  value={accountNumber}
                  className={`form-control ${ errors.accountNumber ? 'is-invalid': '' }`}
                  onChange={handleAccountNumber}
                >
                </input>
                { errors.accountNumber && <div className='invalid-feedback'> { errors.accountNumber } </div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Account Type:</label>
                <input 
                  type='text'
                  placeholder='Enter Account Type'
                  name='accountType'
                  value={accountType}
                  className={`form-control ${ errors.accountType ? 'is-invalid': '' }`}
                  onChange={handleAccountType}
                >
                </input>
                { errors.accountType && <div className='invalid-feedback'> { errors.accountType } </div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Balance:</label>
                <input 
                  type='number'
                  placeholder='Enter Balance'
                  name='balance'
                  value={balance}
                  className={`form-control ${ errors.balance ? 'is-invalid': '' }`}
                  onChange={handleBalance}
                />
                  { errors.balance && <div className='invalid-feedback'>{ errors.balance }</div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Account Relationship Id:</label>
                <input 
                  type='text'
                  placeholder='Enter Account Relationship Id'
                  name='relationshipId'
                  value={relationshipId}
                  className={`form-control ${ errors.relationshipId ? 'is-invalid': '' }`}
                  onChange={handleRelationshipId}
                >
                </input>
                { errors.relationshipId && <div className='invalid-feedback'> { errors.relationshipId } </div> }
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateFinancialAccount}>Submit</button>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FinancialAccountComponent