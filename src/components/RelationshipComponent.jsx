import React, { useEffect, useState } from 'react'
import { createRelationship, getRelationship, updateRelationship } from '../services/RelationshipService'
import { useNavigate, useParams } from 'react-router-dom'

const RelationshipComponent = () => {
    const [name, setName] = useState('')
    const [website, setWebsite] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    //Validation
    const[errors, setErrors] = useState({
        id: '',
        name: '',
        website: '',
        email: ''
    })

    const navigator = useNavigate();

    useEffect(() => {

        if(id) {
            getRelationship(id).then((response) => {
                setName(response.data.name);
                setWebsite(response.data.website);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function handleName(e){
        setName(e.target.value);
    }

    function handleWebsite(e){
        setWebsite(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function saveOrUpdateRelationship(e){
        e.preventDefault();

        if(validateForm()){
            const relationship = {name, website, email};
            console.log(relationship);

            if(id) {
                updateRelationship(id, relationship).then((response) => {
                    console.log(response.data);
                    navigator('/relationships')
                }).catch(error => {
                    console.log(error);
                })
            } else {
                // refer to RelationshipService for API method
                createRelationship(relationship).then((response) => {
                    console.log(response.data);
                    navigator('/relationships')
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }


    //Check form data
    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        //if field not null, show blank error, if null show error
        if(name.trim()){
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'Name is required!';
            valid = false;
        }

        if(website.trim()){
            errorsCopy.website = '';
        } else {
            errorsCopy.website = 'Website is required!';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required!';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Relationship</h2>
        } else {
            return <h2 className='text-center'>Add Relationship</h2>
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
                <label className='form-label'>Relationship Name:</label>
                <input 
                  type='text'
                  placeholder='Enter Relationship Name'
                  name='name'
                  value={name}
                  className={`form-control ${ errors.name ? 'is-invalid': '' }`}
                  onChange={handleName}
                >
                </input>
                { errors.name && <div className='invalid-feedback'> { errors.name } </div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Relationship Website:</label>
                <input 
                  type='text'
                  placeholder='Enter Relationship Website'
                  name='website'
                  value={website}
                  className={`form-control ${ errors.website ? 'is-invalid': '' }`}
                  onChange={handleWebsite}
                >
                </input>
                { errors.lastName && <div className='invalid-feedback'> { errors.website } </div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Relationship Email:</label>
                <input 
                  type='text'
                  placeholder='Enter Relationship Email'
                  name='email'
                  value={email}
                  className={`form-control ${ errors.email ? 'is-invalid': '' }`}
                  onChange={handleEmail}
                >
                </input>
                { errors.email && <div className='invalid-feedback'> { errors.email } </div> }
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateRelationship}>Submit</button>

            </form>
          </div>
        </div>
      </div>

    </div>
  ) 
}

export default RelationshipComponent