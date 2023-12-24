import React from 'react'
import './comp.css'
import { Link } from 'react-router-dom'

export default function Body() {
  return (
    <>
        <div className="body-container">
            <div className="body-f">
                <h4 className='body-text'>Billing System</h4>
                <Link  className='body-but' to="/bill">New Order</Link>
            </div>
            <div className="body-f">
                <h4 className='body-text'>Check Storce</h4>
                <Link  className='body-but' to="/showStore">View Storce</Link>
            </div>
            <div className="body-f">
                <h4 className='body-text'>Check Order</h4>
                <Link  className='body-but' to="/order">View Order</Link>
            </div>
        </div> 
    </>
  )
}
