import React, {useEffect, useState} from 'react'
import { deleteCustomer, getListCustomers } from '../services/CustomerServices'
import { useNavigate } from 'react-router-dom'

function ListCustomers() { //function to display all customers registered in the system ina table

    const [customers, setCustomer] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllCustomers();
    }, [])

    function getAllCustomers() {
        getListCustomers().then((response) => {
            setCustomer(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewCustomer() {
        navigator('/add-customer')
    }

    function updateCustomer(customerId) {
        navigator(`/update-customer/${customerId}`)
    }

    //funtion to delete customer from system/database
    function removeCustomer(customerId) {
        console.log(customerId)

        deleteCustomer(customerId).then((response)=>{
            getAllCustomers();        
        }).catch(error => {
            console.error(error);
        })
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //mapping customers to table rows suing the id as key thanks to map func
                        customers.map(customer =>
                            <tr key={customer.customerId}>
                                <td>{customer.customerId}</td>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={()=> updateCustomer(customer.customerId)}>Update</button>
                                    <button className='btn btn-danger' onClickCapture={()=> removeCustomer(customer.customerId)} style={{marginLeft: '10px'}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListCustomers
