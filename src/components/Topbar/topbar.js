import './topbar.scss'
import {  NavLink } from 'react-router-dom' 
// import LogoS from '../../assets/images/ibrahim.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Topbar = () => (
  <div className="nav-bar">
    {/* <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
    </Link> */}
    <nav>
      <NavLink exact="true" activeclassname="active" to='/'>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <br></br><br></br>  <br></br><br></br>  <br></br><br></br>  <br></br><br></br>  
      <br></br><br></br>  <br></br><br></br>  <br></br><br></br> <br></br><br></br>  
      <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="project-link" to='/projects'>
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
   
    </nav>

    <ul>
        <li>
            <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ibrahim-pala-100260205/"
            >
                <FontAwesomeIcon icon ={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/IbrahimPala1"
            >
                <FontAwesomeIcon icon ={faGithub} color="#4d4d4e" />
            </a>
        </li>
    </ul>
  </div>
)

export default Topbar