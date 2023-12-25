import axios from 'axios'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddItem() {

  let navigate = useNavigate()

  const [user, setUser] = useState({
    spname : "",
    squentity : "",
    sgetprice : "",
    ssellprice : ""
  })

  const{spname, squentity, sgetprice, ssellprice} = user

  const onInputChange = (e) => {

    const { name, value } = e.target;

    const numericValue = ['squentity', 'sgetprice', 'ssellprice'].includes(name) ? parseInt(value, 10) : value;

    setUser({
      ...user,
      [name] : numericValue
    });
  };

  const onSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    await axios.post("http://localhost:8080/postNewItem", user)
    navigate("/showStore")
    
  };

  return (
    <>
      <div className='addItem-container'>
        <div className="addItem-body">

          <div className="addItem-head">
            <h4>Add New Item</h4>
            <Link className="addItem-head-close" to = "/showStore"><ion-icon name="close"></ion-icon></Link>
          </div>

          <form onSubmit={(e) => onSubmit(e)} >
            <div className="addItems">
              <label htmlFor="Name" className='addItem-lable'>Product Name</label>
              <input  type="text" 
                      className='addItem-control' 
                      placeholder='Enter new product Name..' 
                      name='spname' 
                      value={spname}
                      onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="addItems">
              <label htmlFor="Name" className='addItem-lable'>Quentity</label>
              <input  type="text" 
                      className='addItem-control' 
                      placeholder='Enter quentity..' 
                      name='squentity' 
                      value={squentity}
                      onChange={(e) => onInputChange(e)}/>
            </div>
            
            <div className="addItems">
              <label htmlFor="Name" className='addItem-lable'>Get Price</label>
              <input  type="text" 
                      className='addItem-control' 
                      placeholder='Enter get price..' 
                      name='sgetprice' 
                      value={sgetprice}
                      onChange={(e) => onInputChange(e)}/>
            </div>
            
            <div className="addItems">
              <label htmlFor="Name" className='addItem-lable'>Sell Price</label>
              <input  type="text" 
                      className='addItem-control' 
                      placeholder='Enter sell price..' 
                      name='ssellprice' 
                      value={ssellprice}
                      onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="buttonItem">
              <button type='button' className='button01' onClick={() => navigate("/showStore")}>Cansel</button>
              <button type='submit' className='button02'>Submit</button>
            </div>

          </form>
          
          

        </div>
      </div>
    </>
  )
}
