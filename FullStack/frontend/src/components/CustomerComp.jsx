import React, {useState} from 'react'

function CustomerComp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  function saveCustomer(event) {
    event.preventDefault();

    const customer = {firstName, lastName, email}
    console.log(customer) 
  }

  return (
    <div className = 'container'> 
      <br /><br /><br />
      <div className='row'>
        <div className='card  col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Sign Up as Customer</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input type='text' 
                  placeholder='Enter Customer First name' 
                  name='firstName' 
                  value={firstName} 
                  className='form-control' 
                  onChange={(event) => setFirstName(event.target.value)}>
                </input>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input type='text' 
                  placeholder='Enter Customer last name' 
                  name='lastName' 
                  value={lastName} 
                  className='form-control' 
                  onChange={(event) => setLastName(event.target.value)}>
                </input>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input type='text' 
                  placeholder='Enter Customer email' 
                  name='email' 
                  value={email} 
                  className='form-control' 
                  onChange={(event) => setEmail(event.target.value)}>
                </input>
              </div>
              <button className='btn btn-success' onClick={saveCustomer}>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CustomerComp