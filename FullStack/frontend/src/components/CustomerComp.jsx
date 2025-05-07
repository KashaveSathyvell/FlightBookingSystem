import React, {useState, useEffect} from 'react'
import { createCustomer, getCustomer, updateCustomer, deleteCustomer } from '../services/CustomerServices';
import { useNavigate, useParams } from 'react-router-dom';

function CustomerComp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {customerId} = useParams();
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
 
  const navigator = useNavigate();

  useEffect(() => {
    if(customerId) {
      getCustomer(customerId).then((response)=> {
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
      }).catch(error => {
        console.error(error);
      })
    }
  }, [customerId])

  function saveUpdateCustomer(event) {
    event.preventDefault();
    
    const customer = {firstName, lastName, email, password}
    console.log(customer) 

    if (validateForm()) {
      if(customerId) {
        updateCustomer(customerId, customer).then((response) => {
          console.log(response.data);
          navigator('/customers')
        }).catch(error => {
          console.error(error);
        })
      }
      else {
        createCustomer(customer).then((response) => {
        console.log(response.data);
        navigator('/')
      }).catch((error) => {
        console.error(error);
      })
      }      
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = {... errors};

    if(firstName.trim()) {
      errorsCopy.firstName = ''
    } 
    else {
      errorsCopy.firstName = 'First name is required'
      valid = false;
    }

    if(lastName.trim()) {
      errorsCopy.lastName = ''
    } 
    else {
      errorsCopy.lastName = 'Last name is required'
      valid = false;
    }

    if(email.trim()) {
      errorsCopy.email = ''
    } 
    else {
      errorsCopy.email = 'Email is required'
      valid = false;
    }

    if(password.trim()) {
      errorsCopy.password = ''
    }
    else {
      errorsCopy.password = 'Password is required'
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if(customerId) {
      return <h2 className='text-center'>Update Customer</h2>
    }
    else {
      return <h2 className='text-center'>Sign Up as Customer</h2>
    }
  }

  return (
    <div className = 'container'> 
      <br /><br /><br />
      <div className='row'>
        <div className='card  col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input type='text' 
                  placeholder='Enter Customer First name' 
                  name='firstName' 
                  value={firstName} 
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  onChange={(event) => setFirstName(event.target.value)}>
                </input>
                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input type='text' 
                  placeholder='Enter Customer last name' 
                  name='lastName' 
                  value={lastName} 
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} 
                  onChange={(event) => setLastName(event.target.value)}>
                </input>
                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input type='text' 
                  placeholder='Enter Customer email' 
                  name='email' 
                  value={email} 
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                  onChange={(event) => setEmail(event.target.value)}>
                </input>
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Password:</label>
                <input type='password' 
                  placeholder='Enter Password' 
                  name='password' 
                  value={password} 
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                  onChange={(event) => setPassword(event.target.value)}>
                </input>
                {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
              </div>

              <button className='btn btn-success' onClick={saveUpdateCustomer}>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CustomerComp