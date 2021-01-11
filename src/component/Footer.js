import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub , faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons'
function Footer({isDark}) {
    return (
        <footer >
            <a href = 'https://github.com/kunwar-11'>
                <FontAwesomeIcon  className = 'icon' size = '2x' icon = {faGithub}/>
            </a>
            <a href = 'https://www.instagram.com/11rish09/'>
                <FontAwesomeIcon  className = 'icon' size = '2x' icon = {faInstagram}/>
            </a>
            <a href = 'https://twitter.com/RishabhKunwar11'>
                <FontAwesomeIcon className = 'icon' size = '2x' icon = {faTwitter}/>
            </a>
           
        </footer>
    )
}

export default Footer
