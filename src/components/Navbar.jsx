import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  // eslint-disable-next-line
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid mx-2">
      <a className="navbar-brand" href="/">{props.title}</a>
      
        
      
      
      
{/* <div className="d-flex">
<div className="bg-primary rounded mx-2" onClick={props.toggleMode} style={{height:'25px',width:'25px'}}> </div>

</div> */}

  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    
  </nav>
  )
}


Navbar.propTypes = {title: PropTypes.string,
  aboutText: PropTypes.string};