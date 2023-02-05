import React from 'react'
import Logo from '../assets/logosmol.png'
function Footer() {
  var date = new Date()
  var year = date.getFullYear()
  return (
    <footer>
      <img src={Logo}/>
      <div>
      <p className='center'>Copyright {year}.</p>
      <p>Built and Deployed by <b><a href='https://github.com/Anchit-Nayak'>Anchit Nayak</a></b></p>
      </div>
      
    </footer>
  )
}

export default Footer