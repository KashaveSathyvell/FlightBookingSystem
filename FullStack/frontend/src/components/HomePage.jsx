import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { customerLogin, createCustomer } from '../services/CustomerServices';
import CustomerComp from './CustomerComp';
// import buttonCenter from '../App.css'

function HomePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigator = useNavigate();

    function ShowCustomers() {
        navigator('/customers')
    }

    function SignUp(event) {
        event.preventDefault();
        navigator('/add-customer');
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = {};

        if(email.trim()) {
            errorsCopy.email = '';
        }
        else {
            errorsCopy.email= 'Email is required';
            valid = false;
        }
        if(password.trim()) {
            errorsCopy.password='';
        }
        else {
            errorsCopy.password='Password is required';
            valid = false;
        }
        setError(errorsCopy);
        return valid;
    }

    function Login(event) {
        event.preventDefault();

        if(validateForm()) {
            customerLogin(email, password).then((response) => {
                console.log("Login response:", response.data);
                
                if(response.data) {
                    console.log("Login successful");
                    navigator('/customers')
                } else {
                    setError({apiError: 'Issue with Server'});
                }
            }).catch(error => {
                console.error(error);
                setError({apiError: 'Invalid email or password'});
            })
        }
    }

  return (
    <div className='container'>
        <h1 className='text-center'>Welcome to Flight Booking System</h1>

        <div className='card-body'>
            <form onSubmit={Login}>
                <div className='form-group mb-2'>
                    <label className='form-label'>Email: </label>
                    <input className={`form-control  ${error.email ? 'is-invalid' : ''}`}
                        type='email' 
                        placeholder="Enter your email" 
                        name="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}>
                    </input>
                    {error.email && <div className='invalid-feedback'>{error.email}</div>}
                </div>
                <div className='form-group mb-2'>
                    <label className='form-label'>Password: </label>
                    <input className={`form-control  ${error.password ? 'is-invalid' : ''}`}   
                        type='password' 
                        placeholder="Enter your password" 
                        name="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}>
                    </input>
                    {error.password && <div className='invalid-feedback'>{error.password}</div>}
                </div>
                {error.apiError && <div className='alert alert-danger'>{error.apiError}</div>}
                
                <div className='VerticalCenter'>
                    <button className='btn btn-primary mb-2' type="submit" style={{marginTop: '30px'}}>Login</button>
                    <button className='btn btn-primary mb-2' onClick={SignUp} style={{marginTop: '30px', marginLeft: '30px'}}>Sign Up</button>
                </div>
            
            </form>
        </div>

        

        <div className='VerticalCenter'>
            <button className='btn btn-primary mb-2' onClick={ShowCustomers} style={{marginTop: '20px'}}>List Customers</button>
        </div>
    </div>
  )
}

export default HomePage