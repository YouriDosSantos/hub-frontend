import React, { useCallback, useEffect, useState } from 'react'
import { deleteContact, listContacts } from '../services/ContactService'
import { useNavigate } from 'react-router-dom'

const ContactList = () => {

    // syntax for useState Hook -> Contacts is state variable, setContacts is function that updates contacts = state variable
    const [contacts, setContacts] = useState([])
    //changes for pagination
    const [page, setPage] = useState(0);
    const [size] = useState(5); // not using setSize, not planning on changing page size
    const [totalPages, setTotalPages] = useState(0);
    const [sortBy, setSortBy] = useState("last_name");
    const [direction, setDirection] = useState("asc");
    const [search, setSearch] = useState("");


    //variable for the useNavigate shown above
    const navigator = useNavigate();

    //changed for pagination
    const getAllContacts = useCallback(() => {
        listContacts(page, size, sortBy, direction ,search)
        .then((response) => {
            setContacts(response.data.content);
            setTotalPages(response.data.totalPages);
        })
        .catch(error => {
            console.error(error);
        })
    }, [page, size, sortBy, direction ,search]);


     //changed for pagination
    useEffect(() => {
        getAllContacts();
    }, [getAllContacts]);

     // Changed for pagination
    useEffect(() => {
        setPage(0);

    }, [search]);

    function addNewContact(){
        navigator('/add-contact')
    }

    function updateContact(id){
        navigator(`/edit-contact/${id}`)
    }

    async function removeContact(id) {

        console.log(id);
        
        try {
            await deleteContact(id);    // wait for deletion
            getAllContacts();           //refresh list
        } catch (error) {               
            console.error(error);       // log any error
        }
    }

  return (
    <div className='container mt-4'>
        <div className='card shadow-lg broder-0 rounded-3'>
            <div className='card-body'>
                <h2 className='text-center mb-4'>List of Contacts</h2>

                {/* add contact button */}
                <div className='d-flex justify-content-end mb-3'>
                    <button className='btn btn-primary mb-2' onClick={addNewContact}>
                        <i className='bi bi-person-plus me-2'></i>Add Contact
                    </button>
                </div>

                {/* Search Bar */}
                <div className='mb-3 d-flex'>
                    <input 
                        type='text'
                        placeholder='Search Contacts'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='form-control me-2'
                    />
                    <button className='btn btn-secondary' onClick={() => setPage(0)}>Search</button>
                </div>

                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr className='table-dark text-center align-middle'>
                            <th>Contact Id</th>
                            <th>Contact First Name</th>

                            {/* Sortable Last Name Header */}
                            <th
                                onClick={() => {
                                    setSortBy("last_name");
                                    setDirection(direction === "asc" ? "desc" : "asc");
                                }}
                                style={{ cursor: "pointer"}}
                            >
                                Contact Last Name {sortBy === "last_name" ? (direction === "asc" ? "↑" : "↓") : ""}
                            </th>

                            <th>Contact Email</th>
                            <th>Related Relationship</th>
                            <th>Contact Relationship Id</th>
                            <th>Contact Phone Number</th>
                            <th>Contact Job Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map(contact =>
                                <tr key={contact.id} className='text-center align-middle'>
                                    <td>{contact.id}</td>
                                    <td>{contact.firstName}</td>
                                    <td>{contact.lastName}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.relationshipName}</td>
                                    <td>{contact.relationshipId}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.jobTitle}</td>
                                    
                                    <td>
                                        <div className='d-flex justify-content-center gap-2'>
                                            <button className='btn btn-info' onClick={() => updateContact(contact.id)}>Update</button>
                                            <button className='btn btn-danger' onClick={() => removeContact(contact.id)}>Delete</button>
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

                    <span>
                        {totalPages > 0
                            ? `Page ${page + 1} of ${totalPages}`
                            : "No results"}
                    </span>

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

export default ContactList