import React, { useEffect, useState } from 'react'
import { deleteFinancialAccount, listFinancialAccounts } from '../services/FinancialAccountService'
import { useNavigate } from 'react-router-dom'

const FinancialAccountList = () => {

    // syntax for useState Hook -> Contacts is state variable, setContacts is function that updates contacts = state variable
    const [financialAccounts, setFinancialAccounts] = useState([])

    //variable for the useNavigate shown above
    const navigator = useNavigate();

    useEffect(() => {
        getAllFinancialAccounts();
    }, [])

    function getAllFinancialAccounts(){
        listFinancialAccounts().then((response) => {
            setFinancialAccounts(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewFinancialAccount(){
        navigator('/add-financial-account')
    }

    function updateFinancialAccount(id){
        navigator(`/edit-financial-account/${id}`)
    }

    // function removeFinancialAccount(id){
    //     console.log(id);

    //     deleteFinancialAccount(id).then((response) => {
    //         getAllFinancialAccounts();
    //     }).catch(error => {
    //         console.error(error);
    //     })
    // }

    async function removeFinancialAccount(id) {

        console.log(id);
        
        try {
            await deleteFinancialAccount(id);   // wait for deletion
            getAllFinancialAccounts();          // refresh list
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='container mt-4'>
        <div className='card shadow-lg broder-0 rounded-3'>
            <div className='card-body'>
                <h2 className='text-center mb-4'>List of Financial Accounts</h2>
                <div className='d-flex justify-content-end mb-3'>
                    <button className='btn btn-primary mb-2' onClick={addNewFinancialAccount}>
                        <i className='bi bi-person-plus me-2'></i>Add Financial Account
                    </button>
                </div>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr className='table-dark text-center align-middle'>
                            <th>Financial Account Id</th>
                            <th>Financial Account Name</th>
                            <th>Financial Account Number</th>
                            <th>Financial Account Type</th>
                            <th>Financial Account Balance</th>
                            <th>Financial Account Relationship Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            financialAccounts.map(financialAccount =>
                                <tr key={financialAccount.id} className='text-center align-middle'>
                                    <td>{financialAccount.id}</td>
                                    <td>{financialAccount.accountName}</td>
                                    <td>{financialAccount.accountNumber}</td>
                                    <td>{financialAccount.accountType}</td>
                                    <td>{financialAccount.balance}</td>
                                    <td>{financialAccount.relationshipId}</td>
                                    <td>
                                        <div className='d-flex justify-content-center gap-2'>
                                            <button className='btn btn-info' onClick={() => updateFinancialAccount(financialAccount.id)}>Update</button>
                                            <button className='btn btn-danger' onClick={() => removeFinancialAccount(financialAccount.id)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default FinancialAccountList