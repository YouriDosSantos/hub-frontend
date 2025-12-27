import React, { useCallback, useEffect, useState } from 'react'
import { deleteRelationship, listRelationships } from '../services/RelationshipService'
import { useNavigate } from 'react-router-dom'

const RelationshipList = () => {

    // syntax for useState Hook -> relationships is state variable, setRelationship is function that updates relationships = state variable

    const [relationships, setRelationships] = useState([])
    //Changes for Pagination
    const [page, setPage] = useState(0);
    const [size] = useState(5); // not using setSize, not planning on changing page size
    const [totalPages, setTotalPages] = useState (0);
    const [sortBy, setSortBy] = useState("name");
    const [direction, setDirection] = useState("asc");
    const [search, setSearch] = useState("");

    const navigator = useNavigate();

    //changed for pagination
    const getAllRelationships = useCallback(() => {
        listRelationships(page, size, sortBy, direction ,search)
        .then((response) => {
            setRelationships(response.data.content);
            setTotalPages(response.data.totalPages);
        })
        .catch(error => {
            console.error(error);
        })
    }, [page, size, sortBy, direction ,search]);
    
    //changed for pagination
    useEffect(() => {
        getAllRelationships();
    }, [getAllRelationships]);

    //change for pagination
    useEffect(() => {
        setPage(0);

    }, [search]);

    function addNewRelationship(){
        navigator('/add-relationship')
    }

    function updateRelationship(id){
        navigator(`/edit-relationship/${id}`)
    }


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

                {/* Add Relationship Button */}
                <div className='d-flex justify-content-end mb-3'>
                    <button className='btn btn-primary mb-2' onClick={addNewRelationship}>
                        <i className='bi bi-person-plus me-2'></i>Add Relationship
                    </button>
                </div>

                {/* Search Bar */}
                <div className='mb-3 d-flex'>
                    <input 
                        type='text'
                        placeholder='Search Relationships'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='form-control me-2'
                    />
                    <button className='btn btn-secondary' onClick={() => setPage(0)}>Search</button>
                </div>

                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr className='table-dark text-center align-middle'>
                            <th>Relationship Id</th>

                            {/* Sortable Relationship Name Header */}
                            <th
                                onClick={() => {
                                    setSortBy("name");
                                    setDirection(direction === "asc" ? "desc" : "asc");
                                }}
                                style={{ cursor: "pointer"}}
                            >
                                Relationship Name {sortBy === "name" ? (direction === "asc" ? "↑" : "↓") : ""}
                            </th>

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

export default RelationshipList