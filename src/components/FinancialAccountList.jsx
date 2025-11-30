import React, { useCallback, useEffect, useState } from 'react'
import { deleteFinancialAccount, listFinancialAccounts } from '../services/FinancialAccountService'
import { useNavigate } from 'react-router-dom'

const FinancialAccountList = () => {

    // syntax for useState Hook -> Contacts is state variable, setContacts is function that updates contacts = state variable
    const [financialAccounts, setFinancialAccounts] = useState([])
    //changes for pagination
    const [page, setPage] = useState(0);
    const [size] = useState(5); // not using setSize, not planning on changing page size
    const [totalPages, setTotalPages] = useState(0);
    const [sortBy, setSortBy] = useState("accountName");
    const [direction, setDirection] = useState("asc");
    const [search, setSearch] = useState("");   

    //variable for the useNavigate shown above
    const navigator = useNavigate();


    //changed for pagination
    const getAllFinancialAccounts = useCallback(() => {
        listFinancialAccounts(page, size, sortBy, direction ,search)
        .then((response) => {
            setFinancialAccounts(response.data.content);
            setTotalPages(response.data.totalPages);
        })
        .catch(error => {
            console.error(error);
        })
    }, [page, size, sortBy, direction ,search]);
    
     //changed for pagination
    useEffect(() => {
        getAllFinancialAccounts();
    }, [getAllFinancialAccounts]);



    function addNewFinancialAccount(){
        navigator('/add-financial-account')
    }

    function updateFinancialAccount(id){
        navigator(`/edit-financial-account/${id}`)
    }

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

                {/* Add Financial Account button*/}
                <div className='d-flex justify-content-end mb-3'>
                    <button className='btn btn-primary mb-2' onClick={addNewFinancialAccount}>
                        <i className='bi bi-person-plus me-2'></i>Add Financial Account
                    </button>
                </div>


                {/* Search Bar */}
                <div className='mb-3 d-flex'>
                    <input 
                        type='text'
                        placeholder='Search Financial Account'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='form-control me-2'
                    />
                    <button className='btn btn-secondary' onClick={() => setPage(0)}>Search</button>
                </div>


                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr className='table-dark text-center align-middle'>
                            <th>Financial Account Id</th>

                            {/* Sortable Account Name Header */}
                            <th
                                onClick={() => {
                                    setSortBy("accountName");
                                    setDirection(direction === "asc" ? "desc" : "asc");
                                }}
                                style={{ cursor: "pointer"}}
                            >
                                Financial Account Name {sortBy === "accountName" ? (direction === "asc" ? "↑" : "↓") : ""}
                            </th>

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
                
                {/*Pagination Controls*/}
                <div className='d-flex justify-content-between mt-3'>
                    <button
                        className='btn btn-outline-primary'
                        disabled={page === 0}
                        onClick={() => setPage(page - 1)}
                    >
                        Previous
                    </button>

                    <span>Page {page + 1} of {totalPages} </span>

                    <button
                        className='btn btn-outline-primary'
                        disabled={page === totalPages - 1}
                        onClick={() => setPage(page + 1)}
                    >
                        Next
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default FinancialAccountList