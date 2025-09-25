import React, { useEffect, useState } from 'react'
import { createContact, getContact, updateContact } from '../services/ContactService'
import { useNavigate, useParams } from 'react-router-dom'

const ContactComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [relationshipId, setRelationshipId] = useState('')
  const [phone, setPhone] = useState('')
  const [jobTitle, setJobTitle] = useState('')

  const {id} = useParams();

  //Validation
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    relationshipId: '',
    phone: '',
    jobTitle: ''
  })

  const navigator = useNavigate();

  useEffect(() => {

    if(id) {
      getContact(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setRelationshipId(response.data.relationshipId);
        setPhone(response.data.phone);
        setJobTitle(response.data.jobTitle);
      }).catch(error => {
        console.error(error);
      })
    }
  }, [id])

  // the handle functions below could be improved with an arrow function instead and then the call in the html form in the return would be changed accordingly also

  function handleFirstName(e){
    setFirstName(e.target.value);
  }

  function handleLastName(e){
    setLastName(e.target.value);
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handleRelationshipId(e){
    setRelationshipId(e.target.value);
  }

  function handlePhone(e){
    setPhone(e.target.value);
  }

  function handleJobTitle(e){
    setJobTitle(e.target.value);
  }

  function saveOrUpdateContact(e){
    e.preventDefault();

    if(validateForm()){
      const contact = {firstName, lastName, email, relationshipId, phone, jobTitle};
      console.log(contact);

      if(id){
        updateContact(id, contact).then((response) => {
          console.log(response.data);
          navigator('/contacts')
        }).catch(error => {
          console.log(error);
        })
      } else {
        // refer to ContactService for API method
        createContact(contact).then((response) => {
        console.log(response.data);
        navigator('/contacts')
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
    if(firstName.trim()){
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First Name is Required!';
      valid = false;
    }

    if(firstName.trim()){
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last Name is Required!';
      valid = false;
    }

    if(firstName.trim()){
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is Required!';
      valid = false;
    }

    if(firstName.trim()){
      errorsCopy.relationshipId = '';
    } else {
      errorsCopy.relationshipId = 'Relationship ID is Required!';
      valid = false;
    }

    if(firstName.trim()){
      errorsCopy.jobTitle = '';
    } else {
      errorsCopy.jobTitle = 'Job Title is Required!';
      valid = false;
    }

    if(firstName.trim()){
      errorsCopy.phone = '';
    } else {
      errorsCopy.phone = 'Phone Number is Required!';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Update Contact</h2>
    } else {
      return <h2 className='text-center'>Add Contact</h2>
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
                <label className='form-label'>Contact First Name:</label>
                <input 
                  type='text'
                  placeholder='Enter Contact First Name'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${ errors.firstName ? 'is-invalid': '' }`}
                  onChange={handleFirstName}
                >
                </input>
                { errors.firstName && <div className='invalid-feedback'> { errors.firstName } </div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Contact Last Name:</label>
                <input 
                  type='text'
                  placeholder='Enter Contact Last Name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${ errors.lastName ? 'is-invalid': '' }`}
                  onChange={handleLastName}
                >
                </input>
                { errors.lastName && <div className='invalid-feedback'> { errors.lastName } </div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Contact Email:</label>
                <input 
                  type='text'
                  placeholder='Enter Contact Email'
                  name='email'
                  value={email}
                  className={`form-control ${ errors.email ? 'is-invalid': '' }`}
                  onChange={handleEmail}
                >
                </input>
                { errors.email && <div className='invalid-feedback'> { errors.email } </div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Contact Relationship Id:</label>
                <input 
                  type='text'
                  placeholder='Enter Contact Relationship Id'
                  name='relationshipId'
                  value={relationshipId}
                  className={`form-control ${ errors.relationshipId ? 'is-invalid': '' }`}
                  onChange={handleRelationshipId}
                >
                </input>
                { errors.relationshipId && <div className='invalid-feedback'> { errors.relationshipId } </div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Contact Phone Number:</label>
                <input 
                  type='text'
                  placeholder='Enter Contact Phone Number'
                  name='phone'
                  value={phone}
                  className={`form-control ${ errors.phone ? 'is-invalid': '' }`}
                  onChange={handlePhone}
                >
                </input>
                { errors.phone && <div className='invalid-feedback'> { errors.phone } </div> }
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Contact Job Title:</label>
                <input 
                  type='text'
                  placeholder='Enter Contact Job Title'
                  name='jobTitle'
                  value={jobTitle}
                  className={`form-control ${ errors.jobTitle ? 'is-invalid': '' }`}
                  onChange={handleJobTitle}
                >
                </input>
                { errors.jobTitle && <div className='invalid-feedback'> { errors.jobTitle } </div> }
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateContact}>Submit</button>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactComponent