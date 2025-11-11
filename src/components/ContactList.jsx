import React, { useEffect, useState } from 'react'
import { deleteContact, listContacts } from '../services/ContactService'
import { useNavigate } from 'react-router-dom'

const ContactList = () => {

    // syntax for useState Hook -> Contacts is state variable, setContacts is function that updates contacts = state variable
    const [contacts, setContacts] = useState([])

    //variable for the useNavigate shown above
    const navigator = useNavigate();

    useEffect(() => {
        getAllContacts();
    }, [])

    function getAllContacts(){
        listContacts().then((response) => {
            setContacts(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewContact(){
        navigator('/add-contact')
    }

    function updateContact(id){
        navigator(`/edit-contact/${id}`)
    }

    // function removeContact(id){
    //     console.log(id);

    //     deleteContact(id).then((response) => {
    //         getAllContacts();
    //     }).catch(error => {
    //         console.error(error);
    //     })
    // }

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
                <div className='d-flex justify-content-end mb-3'>
                    <button className='btn btn-primary mb-2' onClick={addNewContact}>
                        <i className='bi bi-person-plus me-2'></i>Add Contact
                    </button>
                </div>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr className='table-dark text-center align-middle'>
                            <th>Contact Id</th>
                            <th>Contact First Name</th>
                            <th>Contact Last Name</th>
                            <th>Contact Email</th>
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
            </div>
        </div>
    </div>
  )
}

export default ContactList