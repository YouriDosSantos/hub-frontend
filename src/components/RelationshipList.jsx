import React, { useEffect, useState } from 'react'
import { deleteRelationship, listRelationships } from '../services/RelationshipService'
import { useNavigate } from 'react-router-dom'

const RelationshipList = () => {

    // syntax for useState Hook -> relationships is state variable, setRelationship is function that updates relationships = state variable

    const [relationships, setRelationships] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllRelationships();
    },[])

    function getAllRelationships(){
        listRelationships().then((response) => {
            setRelationships(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewRelationship(){
        navigator('/add-relationship')
    }

    function updateRelationship(id){
        navigator(`/edit-relationship/${id}`)
    }

    // function removeRelationship(id){
    //     console.log(id);

    //     deleteRelationship(id).then((response) => {
    //         getAllRelationships();
    //     }).catch(error => {
    //         console.error(error);
    //     })
    // }

    async function removeRelationship(id) {
        console.log(id);

        try {
            await deleteRelationship(id);   // wait for deletion
            getAllRelationships();          // refresh list
        } catch (error) {
            console.error(error);
        }
    }




      return (
    <div className='container mt-4'>
        <div className='card shadow-lg broder-0 rounded-3'>
            <div className='card-body'>
                <h2 className='text-center mb-4'>List of Relationships</h2>
                <div className='d-flex justify-content-end mb-3'>
                    <button className='btn btn-primary mb-2' onClick={addNewRelationship}>
                        <i className='bi bi-person-plus me-2'></i>Add Relationship
                    </button>
                </div>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr className='table-dark text-center align-middle'>
                            <th>Relationship Id</th>
                            <th>Relationship Name</th>
                            <th>Relationship Website</th>
                            <th>Relationship Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            relationships.map(relationship =>
                                <tr key={relationship.id} className='text-center align-middle'>
                                    <td>{relationship.id}</td>
                                    <td>{relationship.name}</td>
                                    <td>{relationship.website}</td>
                                    <td>{relationship.email}</td>
                                  
                                    
                                    <td>
                                        <div className='d-flex justify-content-center gap-2'>
                                            <button className='btn btn-info' onClick={() => updateRelationship(relationship.id)}>Update</button>
                                            <button className='btn btn-danger' onClick={() => removeRelationship(relationship.id)}>Delete</button>
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

export default RelationshipList