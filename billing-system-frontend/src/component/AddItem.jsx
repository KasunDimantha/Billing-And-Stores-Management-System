import React from 'react'
import { Link } from 'react-router-dom'

export default function AddItem() {
  return (
    <>
      <div className='addItem-container'>
        <div className="addItem-body">

          <div className="addItem-head">
            <h4>Add New Item</h4>
            <Link className="addItem-head-close" to = "/showStore"><ion-icon name="close"></ion-icon></Link>
          </div>

          <form className='list-body'>
            <div className="addItems">
              <label htmlFor="Name" className='addItem-lable'>Product Name</label>
              <input type="text" className='addItem-control' placeholder='Enter new product Name..' name='name'/>
            </div>

            <div className="addItems">
              <label htmlFor="Name" className='addItem-lable'>Quentity</label>
              <input type="number" className='addItem-control' placeholder='Enter quentity..' name='name'/>
            </div>
            
            <div className="addItems">
              <label htmlFor="Name" className='addItem-lable'>Get Price</label>
              <input type="text" className='addItem-control' placeholder='Enter get price..' name='name'/>
            </div>
            
            <div className="addItems">
              <label htmlFor="Name" className='addItem-lable'>Sell Price</label>
              <input type="text" className='addItem-control' placeholder='Enter sell price..' name='name'/>
            </div>
          </form>
          
          <div className="buttonItem">
            <button className='button01'>Cansel</button>
            <button className='button02'>Delete</button>
          </div>

        </div>
      </div>
    </>
  )
}
