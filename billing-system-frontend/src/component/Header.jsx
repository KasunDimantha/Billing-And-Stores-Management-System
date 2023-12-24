import React, { memo } from 'react'
import './comp.css'
import { Link } from 'react-router-dom'

const Header = memo(() => {
  return (
    <>
        <div className="header">        
            <div className="header-f">
                <h3 className='header-name'>Gamunu Storse</h3>
            </div>
            <div className="header-f">
                <Link className='header-icon' to="/"><ion-icon name="home"></ion-icon></Link>
            </div>
        </div>
    </>
  )
})

export default Header