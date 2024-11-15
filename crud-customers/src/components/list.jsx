import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MockApi from '../apis/mock_api';

export default function List() {
  const [ customers, setCustomers ] = useState([]);

  // const customers = [ {id: 1, firstName: "Jeff", lastName: "Jones", iAgree: true},
  //   {id: 2, firstName: "Jane", lastName: "Harris", iAgree: false}]

  const getCustomers = async () => {
    const result = await MockApi.get();
    setCustomers(result.data);
  }

  const deleteCustomer = async (id) => {
    await MockApi.delete(id);
    getCustomers(result.data);
  }

  useEffect(() => {
    getCustomers();
  }, [customers]);
      
  return (
    <div>
      <Link to='/create/0'>
        <button className="btn btn-light">Create</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>I Agree</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.iAgree ? 'Checked' : 'Unchecked'}</td>
                <td><Link to={`/edit/${customer.id}`}><button className="btn btn-light">Edit</button></Link></td>
                <td>
                  <button className="btn btn-light" onClick={() => deleteCustomer(customer.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
