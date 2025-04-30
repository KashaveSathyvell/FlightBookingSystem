import React, {useEffect, useState} from 'react'
import { getListCustomers } from '../services/CustomerServices'
import { useNavigate } from 'react-router-dom'

function ListCustomers() {

    const [customers, setCustomer] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getListCustomers().then((response) => {
            setCustomer(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewCustomer() {
        navigator('/add-customer')
    }

    return (
        <div className='container'>
            <h2 className='text-center'> List of Customers </h2>
            <button className='btn btn-primary mb-2' onClick={addNewCustomer}>Add Customer</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer First Name</th>
                        <th>Customer Last Name</th>
                        <th>Customer Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(customer =>
                            <tr key={customer.customerId}>
                                <td>{customer.customerId}</td>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListCustomers
