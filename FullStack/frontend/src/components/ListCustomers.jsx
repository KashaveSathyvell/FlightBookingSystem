import React, {useEffect, useState} from 'react'
import { getListCustomers } from '../services/CustomerServices'

function ListCustomers() {

    const [customers, setCustomer] = useState([])

    useEffect(() => {
        getListCustomers().then((response) => {
            setCustomer(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

  return (
    <div className='container'>
        <h2 className='text-center'> List of Customers </h2>
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
