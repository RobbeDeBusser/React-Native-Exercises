import { useState, useEffect } from 'react';

import MockApi from '../apis/mock_api';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({ id:0, firstName: '', lastName: '', iAgree: false});

  const getCustomer = async (id) => {
    const result = await MockApi.getbyid(id);
    setCustomer(result.data);
  }

  useEffect(() => {
    if(id != 0){
      getCustomer(id);
    }
  }, [id]);

  async function submitForm(){
    if (id == "0") {
      await MockApi.post(customer);
    } else {
      await MockApi.put(customer);
    }
    navigate(-1);
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input className="form-control"  placeholder='First Name' value={customer.firstName} onChange={(e) => setCustomer({...customer, firstName :e.target.value})}/>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input className="form-control"  placeholder='Last Name'  value={customer.lastName} onChange={(e) => setCustomer({...customer, lastName :e.target.value})}/>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={customer.iAgree} onChange={(e) => setCustomer({...customer, iAgree :e.target.checked})} />
          <label>
          I agree to the Terms and Conditions
          </label>
        </div>
        <button type="button" className="btn btn-light" onClick={submitForm}>
          { (id == 0) ? <>Add</> : <>Update</>} 
        </button>
      </form>
    </div>
  )
}
