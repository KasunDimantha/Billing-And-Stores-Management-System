import React, { memo } from 'react'
import './comp.css'

const Header = memo(() => {
  return (
    <>
        <div className="header">        
            <div className="header-f">
                <h3 className='header-name'>Gamunu Storse</h3>
            </div>
            <div className="header-f">
                <span className='header-icon'><ion-icon name="home"></ion-icon></span>
            </div>
        </div>
    </>
  )
})

export default Header